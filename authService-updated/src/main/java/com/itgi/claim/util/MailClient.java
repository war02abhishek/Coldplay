package com.itgi.claim.util;

import java.io.BufferedReader;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.StringWriter;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;

import com.itgi.claim.MailProperties;

@Component
public class MailClient {

	@Autowired
	private MailProperties mailProperties;

	private JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();

	private static final Logger logger = LoggerFactory.getLogger(MailClient.class);

	private Properties getMailTemplatesPathProperties() {
		Properties properties = new Properties();
		properties.setProperty("resource.loader.file.path", mailProperties.mailTemplatesPath());
		return properties;
	}

	private Properties getSmtpHostProperties() {
		Properties properties = new Properties();
		properties.put("mail.smtp.host", mailProperties.smtpHost());
		properties.put("mail.smtp.port", mailProperties.smtpPort());
		return properties;
	}

	public void sendForgotPasswordEmail(String toEmail, String userName, String resetLink) {
		try {
			// Initialize Velocity
			Properties properties = getMailTemplatesPathProperties();
			VelocityEngine ve = new VelocityEngine();
			ve.init(properties);
			Template t = ve.getTemplate("forgotPassword.vm");

			// Prepare context
			VelocityContext context = new VelocityContext();
			context.put("name", userName);
			context.put("resetLink", resetLink);

			// Merge template
			StringWriter writer = new StringWriter();
			t.merge(context, writer);

			// Setup mail session
			Properties props = getSmtpHostProperties();
			Session session = Session.getInstance(props);
			MimeMessage msg = new MimeMessage(session);

			msg.setFrom(new InternetAddress(mailProperties.mailIdNoReply(), mailProperties.mailIdnoReplyName()));
			msg.setSubject(mailProperties.getProperty("mail.forgot.password.subject"));
			msg.addRecipients(Message.RecipientType.TO, toEmail);
			msg.setSentDate(new Date());

			// Set mail body
			Multipart multipart = new MimeMultipart();
			MimeBodyPart mimeBodyPart = new MimeBodyPart();
			mimeBodyPart.setContent(writer.toString(), "text/html"); // use "text/html" if template contains HTML
			multipart.addBodyPart(mimeBodyPart);

			// Finalize
			msg.setContent(multipart);
			msg.saveChanges();

			// Send
			Transport.send(msg);

		} catch (Exception e) {
			logger.error("ERROR inside sendForgotPasswordEmail method", e);
		}
	}

	public boolean sendUnderwriterActionMail(Map<String, String> parametersMap, String bcc) {
		try {
			Properties mailTemplatePathProperties = getMailTemplatesPathProperties();
			VelocityEngine velocityEngine = new VelocityEngine();
			velocityEngine.init(mailTemplatePathProperties);
			VelocityContext context = new VelocityContext();
			for (Entry<String, String> entrySet : parametersMap.entrySet()) {
				context.put(entrySet.getKey(), entrySet.getValue());
			}

			StringWriter writer = new StringWriter();
			Template template = velocityEngine.getTemplate("UWActionMail.vm");
			template.merge(context, writer);
			Properties smtpHostProperties = getSmtpHostProperties();
			Session session = Session.getInstance(smtpHostProperties);
			MimeMessage mimeMessage = new MimeMessage(session);
			mimeMessage
					.setFrom(new InternetAddress(mailProperties.mailIdNoReply(), mailProperties.mailIdnoReplyName()));
			mimeMessage.addRecipients(Message.RecipientType.TO, parametersMap.get("TO"));
			mimeMessage.addRecipients(Message.RecipientType.CC, parametersMap.get("CC"));
			mimeMessage.addRecipients(Message.RecipientType.BCC, bcc);
			mimeMessage.setSubject(parametersMap.get("SUBJECT"));
			mimeMessage.setSentDate(new Date());
			Multipart multipart = new MimeMultipart();
			MimeBodyPart mimeBodyPart = new MimeBodyPart();
			mimeBodyPart.setContent(writer.toString(), "text/html; charset=utf-8");
			multipart.addBodyPart(mimeBodyPart);
			mimeMessage.setContent(multipart);
			mimeMessage.saveChanges();
			Transport.send(mimeMessage);
			return true;
		} catch (Exception e) {
			logger.error("Error Occurred in sending mail", e);
		}
		return false;
	}

	public boolean send(String to, String subject, String message, String messageType, String fileName)
			throws FileNotFoundException {

		try {
			// Create a default MimeMessage object.

			String resourceName = String.format("classpath:Templates/images/background_web.png");
			File file = ResourceUtils.getFile(resourceName);
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();

			MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);

			// Set From: header field of the header.
			messageHelper.setFrom(new InternetAddress(mailProperties.mailIdNoReply()));

			// Set To: header field of the header.
//			messageHelper.setTo(to);
			mimeMessage.addRecipients(Message.RecipientType.TO, to);
//			messageHelper.setCc(new InternetAddress(to));

			// Set Subject: header field
			messageHelper.setSubject(subject);

			// messageHelper.setText(message);
			// messageHelper.setText(getContent(message));

			messageHelper.setSentDate(new Date());

			// Create the message part
			MimeBodyPart messageBodyPart = new MimeBodyPart();

			messageBodyPart.setText(getContent(message), "UTF-8", "html");

			Multipart multipart = new MimeMultipart();

			multipart.addBodyPart(messageBodyPart);

			MimeBodyPart localMimeBodyPart2 = new MimeBodyPart();
			FileDataSource localFileDataSource = new FileDataSource(file);
			localMimeBodyPart2.setDataHandler(new DataHandler(localFileDataSource));
			localMimeBodyPart2.setHeader("Content-ID", "<image>");
			multipart.addBodyPart(localMimeBodyPart2);

			if (messageType.equalsIgnoreCase("quoteDocument")) {
				MimeBodyPart messageBodyPart2 = new MimeBodyPart();
//				String filename = parametersMap.get("MailForOfferLetter");

				DataSource source = new FileDataSource(fileName);
				messageBodyPart2.setDataHandler(new DataHandler(source));
				messageBodyPart2.setFileName("quotation.pdf");
				multipart.addBodyPart(messageBodyPart2);
			}

			mimeMessage.setContent(multipart);
			logger.info("message sent to::" + to);
			logger.info("message sent::" + message);
			/*
			 * if (messageType == "text") { // Now set the actual message
			 * message1.setText("messageType"); } else { message1.setContent(message1,
			 * "text/html"); }
			 */

			// System.out.println("sending...");
			// Send message
			// Transport.send(message1);
			javaMailSender.send(mimeMessage);
			return true;
			// System.out.println("Sent message successfully....");
		} catch (MessagingException mex) {
			logger.info("error while sending mail::" + mex);
			logger.error("error while sending mail::", mex);
			return false;
		}

	}

	public String getContent(String message) throws FileNotFoundException {
		String resourceName = String.format("classpath:Templates/template.html");
		File file = ResourceUtils.getFile(resourceName);

		String str1 = "";
		try {
			BufferedReader localBufferedReader = new BufferedReader(new FileReader(file));
			String str2;
			while ((str2 = localBufferedReader.readLine()) != null) {
				str1 = str1 + str2;
				if (str1.contains("*message")) {
					str1 = str1.replace("*message", message);
				}

			}
			localBufferedReader.close();
		} catch (IOException localIOException) {
			logger.error("error while getting content::", localIOException);
			localIOException.printStackTrace();
		}

		return str1;

	}

	public boolean sendAttachment(String to, String subject, String message, String messageType, List filename)
			throws FileNotFoundException {

		try {
			// Create a default MimeMessage object.

			String resourceName = String.format("classpath:Templates/images/background_web.png");
			File file = ResourceUtils.getFile(resourceName);

			MimeMessage mimeMessage = javaMailSender.createMimeMessage();

			MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);

			// Set From: header field of the header.
			messageHelper.setFrom(new InternetAddress(mailProperties.mailIdNoReply()));

			// Set To: header field of the header.
			messageHelper.setTo(new InternetAddress(to));

			// Set Subject: header field
			messageHelper.setSubject(subject);

			// messageHelper.setText(message);
			// messageHelper.setText(getContent(message));

//			messageHelper.addAttachment("", file);
			logger.info("file size  " + filename.size());

			MimeBodyPart messageBodyPart2 = new MimeBodyPart();

			// creates message part
			MimeBodyPart messageBodyPart = new MimeBodyPart();
			messageBodyPart.setContent(message, "text/html");
			// creates multi-part
			Multipart multipart1 = new MimeMultipart();
			multipart1.addBodyPart(messageBodyPart);

			// adds attachments
			if (filename != null && filename.size() > 0) {

				Multipart multipart3 = new MimeMultipart();
				for (int i = 0; i < filename.size(); i++) {
					logger.info("file " + filename.get(i) + "");
					File orignalFile = attachFile(filename.get(i) + "");

					messageBodyPart2.setDataHandler(new DataHandler(new FileDataSource(orignalFile)));
					messageBodyPart2.setFileName(filename.get(i) + "");
					logger.info("orignalFile  " + filename.get(i) + "");
					// MimeBodyPart attachPart = new MimeBodyPart();
					multipart3.addBodyPart(messageBodyPart2);

				}
				mimeMessage.setContent(multipart3);
			}

			messageHelper.setSentDate(new Date());

			// Create the message part
			MimeBodyPart messageBodyPart1 = new MimeBodyPart();

			messageBodyPart1.setText(getContent(message), "UTF-8", "html");

			Multipart multipart = new MimeMultipart();

			multipart.addBodyPart(messageBodyPart1);

			MimeBodyPart localMimeBodyPart2 = new MimeBodyPart();
			FileDataSource localFileDataSource = new FileDataSource(file);
			localMimeBodyPart2.setDataHandler(new DataHandler(localFileDataSource));
			localMimeBodyPart2.setHeader("Content-ID", "<image>");
			multipart.addBodyPart(localMimeBodyPart2);

			// mimeMessage.setContent(multipart);

			logger.info("inside sendAttachment, message sent to::" + to);
			logger.info("message sent in sendAttachment::" + message);
			/*
			 * if (messageType == "text") { // Now set the actual message
			 * message1.setText("messageType"); } else { message1.setContent(message1,
			 * "text/html"); }
			 */

			// System.out.println("sending...");
			// Send message
			// Transport.send(message1);
			javaMailSender.send(mimeMessage);
			return true;
			// System.out.println("Sent message successfully....");
		} catch (MessagingException mex) {
			logger.info("error while sending mail::" + mex);
			logger.error("error while sending mail::", mex);
			return false;
		}

	}

	public File attachFile(String fileName) {
		File originalFile = new File("");
		String rootPath = System.getProperty("user.dir");
		File dir = new File(rootPath + File.separator + "webapp" + File.separator + "temp" + File.separator + fileName);
		String file = dir.toString();

		try {
			originalFile = new File(file);

		} catch (Exception e) {
			e.printStackTrace();
		}
		logger.info("file path ---  " + originalFile);
		return originalFile;
	}

}