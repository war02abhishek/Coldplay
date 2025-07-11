package com.itgi.claim.util;

import java.io.File;
import java.io.FileWriter;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.axis.AxisFault;
import org.apache.axis.Message;
import org.apache.axis.MessageContext;
import org.apache.axis.components.logger.LogFactory;
import org.apache.axis.handlers.BasicHandler;
import org.apache.axis.utils.Messages;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;

public class SOAPLogHandlerNew extends BasicHandler {
	private static final long serialVersionUID = 1083925647717551026L;
	protected static Log log = LogFactory.getLog(SOAPLogHandlerNew.class.getName());
	private long start = -1;
	private boolean writeToConsole = false;
	private String filepath = "/AXIS";
	private String filename = "AXIS";
	private Integer fileRollingSize = 200;
	private String logDate = "";

	public void init() {
		super.init();
		// read writeToConsole from client-config.wsdd
		Object opt = this.getOption("LogHandler.writeToConsole");
		if (opt != null && opt instanceof String && "true".equalsIgnoreCase((String) opt)) {
			writeToConsole = true;
		}
		// read folder from client-config.wsdd
		opt = this.getOption("LogHandler.folder");
		if (opt != null && opt instanceof String && StringUtils.isNotBlank((String) opt)) {
			this.filepath = (String) opt;
		}
		// read fileName from client-config.wsdd
		opt = this.getOption("LogHandler.fileName");
		if (opt != null && opt instanceof String && StringUtils.isNotBlank((String) opt)) {
			this.filename = (String) opt;
		}
		// read fileRollingSize from client-config.wsdd
		opt = this.getOption("LogHandler.fileRollingSize");
		if (opt != null && opt instanceof String && StringUtils.isNotBlank((String) opt)) {
			this.fileRollingSize = Integer.valueOf((String) opt);
		}
	}

	public void invoke(MessageContext msgContext) throws AxisFault {
		// log.info("Enter: LogHandler::invoke");
		if (msgContext.getPastPivot() == false) {
			this.start = System.currentTimeMillis();
		} else {
			logMessages(msgContext);
		}
		// log.info("Exit: LogHandler::invoke");
	}

	public void onFault(MessageContext msgContext) {
		try {
			logMessages(msgContext);
		} catch (AxisFault axisFault) {
			log.error(Messages.getMessage("exception00"), axisFault);
		}
	}

	private void logMessages(MessageContext msgContext) throws AxisFault {
		try {
			PrintWriter writer = null;
			writer = getWriter();
			Message inMsg = msgContext.getRequestMessage();
			Message outMsg = msgContext.getResponseMessage();
			writer.println("=======================================================");
			writer.println("= Request Time :: " + new SimpleDateFormat("dd-MM-yyyy hh:mm:ss.SSS").format(new Date()));
			if (start != -1) {
				writer.println("= " + Messages.getMessage("elapsed00", "" + (System.currentTimeMillis() - start)));
			}
			writer.println(
					"= " + Messages.getMessage("inMsg00", (inMsg == null ? "null" : inMsg.getSOAPPartAsString())));
			writer.println("= Response Time :: " + new SimpleDateFormat("dd-MM-yyyy hh:mm:ss.SSS")
					.format(new Date(System.currentTimeMillis() + System.currentTimeMillis() - this.start)));
			writer.println(
					"= " + Messages.getMessage("outMsg00", (outMsg == null ? "null" : outMsg.getSOAPPartAsString())));
			writer.println("=======================================================");
			// START FIX:
			// http://nagoya.apache.org/bugzilla/show_bug.cgi?id=16646
			if (!writeToConsole) {
				writer.close();
			}
			// END FIX: http://nagoya.apache.org/bugzilla/show_bug.cgi?id=16646
		} catch (Exception e) {
			log.error(Messages.getMessage("exception00"), e);
			throw AxisFault.makeFault(e);
		}
	}

	private PrintWriter getWriter() throws IOException {
		PrintWriter writer;
		// Allow config info to control where we write.
		if (writeToConsole) {
			// Writing to the console
			writer = new PrintWriter(System.out);
		} else {
			// initialize log folder
			if (StringUtils.isBlank(this.filepath)) {
				this.filepath = "/AXIS";
			}
			// create log folder if not exists
			File folder = new File(filepath);
			if (!folder.exists()) {
				folder.mkdirs();
			}
			// initialize log file
			if (StringUtils.isBlank(this.filename)) {
				this.filename = "AXIS";
			}
			SimpleDateFormat sf = new SimpleDateFormat("dd-MM-yyyy");
			String currentDate = sf.format(new Date());
			if (StringUtils.isBlank(this.logDate)) {
				this.logDate = currentDate;
			}

			// set filename
			String filefullname = this.filename + "_" + this.logDate + ".log";
			// initialize log file
			File logFile = new File(folder, filefullname);
			// get file size
			long fileSize = 0;
			if (logFile.exists()) {
				fileSize = FileUtils.sizeOf(logFile) / (1_0_2_4 * 1_0_2_4);
			}
			// initialize rolling folder
			File rollingFolder = new File(filepath + "/AXIS");
			if (!rollingFolder.exists()) {
				rollingFolder.mkdirs();
			}
			// check if file be rolling up
			boolean reinitialzeLogFile = false;
			if (!currentDate.equalsIgnoreCase(this.logDate)) {
				// move current file to archive folder
				moveFile(logFile, rollingFolder);
				// reset rolling file counter
				// set new log file name to current date
				this.logDate = currentDate;
				reinitialzeLogFile = true;
			} else if (fileSize > fileRollingSize) {
				// move current file to archive folder
				moveFile(logFile, rollingFolder);
				// increment rolling file counter
				reinitialzeLogFile = true;
			}
			if (reinitialzeLogFile) {
				// reset filename
				filefullname = this.filename + "_" + this.logDate + ".log";
				// re-initialize log file
				logFile = new File(folder, filefullname);
			}

			writer = new PrintWriter(new FileWriter(logFile, true));
		}

		return writer;
	}

	private void moveFile(File logFile, File rollingFolder) {
		try {
			if (!logFile.exists()) {
				log.debug("ERROR: FAILED TO MOVE AXIS LOG FILE, FILE " + logFile.getAbsoluteFile() + " DOESN'T EXIST.");
				return;
			}
			// Initialize file rolling counter
			int fileRollingCounter = 1;

			FilenameFilter fileFilter = (dir, name) -> 
			    name.contains(this.logDate) && name.endsWith(".log");

			File[] files = rollingFolder.listFiles(fileFilter);

			if (files != null) {
			    fileRollingCounter = files.length + 1;
			}
			// rolling file
			String rollingFileName = this.filename + "_" + this.logDate + "_" + fileRollingCounter + ".log";

			// rolling file
			File rollingFile = new File(rollingFolder, rollingFileName);
			// fileWriter = new FileWriter(rollingFile, true);

			// copy log file to log rolling file
			FileUtils.moveFile(logFile, rollingFile);
		} catch (Exception e) {
			log.error("ERROR: FAILED TO MOVE AXIS LOG FILE", e);
		}
	}

}
