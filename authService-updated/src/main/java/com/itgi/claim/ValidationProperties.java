package com.itgi.claim;

import java.text.MessageFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:validation.properties")
public class ValidationProperties {
	@Autowired
	private Environment env;

	public String readProperty(String key) {
		return env.getProperty(key);
	}

	// ********************************************
	public String required() {
		return readProperty("required");
	}

	public String invalid() {
		return readProperty("invalid");
	}

	public String minimumLength() {
		return readProperty("minimum-length");
	}

	public String maximumLength() {
		return readProperty("maximum-length");
	}

	public String minimumDate() {
		return readProperty("minimum-date");
	}

	public String maximumDate() {
		return readProperty("maximum-date");
	}

	public String fileUploadLimit() {
		return readProperty("file-upload-limit");
	}

	public String fileUploadSizeLimit() {
		return readProperty("file-upload-size-limit");
	}

	public String fileUploadTotalSizeLimit() {
		return readProperty("file-upload-total-size-limit");
	}

	public String fileUploadInvalidExtension() {
		return readProperty("file-upload-extension-allowed");
	}

	public String onlyAlbhabetsWithSpaceAllowed(String fieldDisplayName) {
		return MessageFormat.format(readProperty("only-albhabets-with-space-allowed"), fieldDisplayName);
	}
	// ********************************************

	// FORM FIELD DISPLAY NAME - START
	public String firstName() {
		return readProperty("form-field.first-name");
	}

	public String lastName() {
		return readProperty("form-field.last-name");
	}
	// FORM FIELD DISPLAY NAME - END

	public String manufactureRequired() {
		return readProperty("manufacturer.required");
	}

	public String manufactureInvalid() {
		return readProperty("manufacturer.invalid");
	}

	public String modelRequired() {
		return readProperty("model.required");
	}

	public String modelInvalid() {
		return readProperty("model.invalid");
	}

	public String fuelTypeRequired() {
		return readProperty("fuel-type.required");
	}

	public String variantRequired() {
		return readProperty("variant.required");
	}

	public String variantInvalid() {
		return readProperty("variant.invalid");
	}

	public String registrationCityRequired() {
		return readProperty("registration-city.required");
	}

	public String registrationCityInvalid() {
		return readProperty("registration-city.invalid");
	}

	public String registrationCityAndStateMismatch() {
		return readProperty("registration-city.state.mismatch");
	}

	public String dateOfFirstRegistrationRequired() {
		return readProperty("date-of-first-registration.required");
	}

	public String registrationMonthYearRequired() {
		return readProperty("registration-month-year.required");
	}

	public String registrationMonthYearInvalid() {
		return readProperty("registration-month-year.invalid");
	}

	public String registrationMonthYearVehicleAgeLimit() {
		return readProperty("registration-month-year.vehicleage.limit");
	}

	public String yearOfMakeRequired() {
		return readProperty("year-of-make.required");
	}

	public String vehicleSubClassNameRequired() {
		return readProperty("vehicle.sub.class.name.required");
	}

	public String makeCodeNameRequired() {
		return readProperty("make.code.name.required");
	}

	public String yearOfMakeMin() {
		return readProperty("year-of-make.min");
	}

	public String yearOfMakeMax() {
		return readProperty("year-of-make.max");
	}

	public String yearOfMakeInvalid() {
		return readProperty("year-of-make.invalid");
	}

	public String previousPolicyExpiryDateRequired() {
		return readProperty("previous-policy-expiry-year.required");
	}

	public String previousTPPolicyExpiryDateInvalid() {
		return readProperty("previous-tp-policy-expiry-date.invalid");
	}

	public String previousTPPolicyInceptionDateInvalid() {
		return readProperty("previous-tp-policy-inception-date.invalid");
	}

	public String previousTPInsurerRequired() {
		return readProperty("previous-tp-policy-insurer.required");
	}

	public String claimOnPolicyRequired() {
		return readProperty("claim-on-policy.required");
	}

	public String previousPolicyExpiryDateInvalid() {
		return readProperty("previous-policy-expiry-year.invalid");
	}

	public String inceptionDateRequired() {
		return readProperty("inception-date.required");
	}

	public String inceptionDateInvalid() {
		return readProperty("inception-date.invalid");
	}

	public String inceptionDateMin() {
		return readProperty("inception-date.min");
	}

	public String inceptionDateMax() {
		return readProperty("inception-date.max");
	}

	public String noClaimBonusNotApplicable() {
		return readProperty("no-claim-bonus.na");
	}

	public String expiryDateRequired() {
		return readProperty("expiry-year.required");
	}

	public String expiryDateInvalid() {
		return readProperty("expiry-year.invalid");
	}

	public String breakinRestricted() {
		return readProperty("policy.breakin.restricted");
	}

	public String policyPeroidMismatch() {
		return readProperty("policy.period.mismatch");
	}

	public String valueAutoCoverageNotAllowed() {
		return readProperty("value.auto.coverages");
	}

	public String nvrNotAllowed() {
		return readProperty("nvr.not.allowed");
	}

	public String depreciationWaiverNotAllowed() {
		return readProperty("depreciationwaiver.not.allowed");
	}

	public String minIDVMessage() {
		return readProperty("min.idv.msg");
	}

	public String maxIDVMessage() {
		return readProperty("max.idv.msg");
	}

	public String OtherAccesoriesMessgage() {
		return readProperty("other.acc.validation.msg");
	}

	public String cngKitMaxLimitMessgage() {
		return readProperty("cng.kit.max.limit");
	}

	public String electricalAccessoriesMaxLimitMessgage() {
		return readProperty("electrical.acc.max.limit");
	}

	public String maxIDVAllowedOnPortal() {
		return readProperty("max.idv.allowed.on.portal");
	}

	public String zeroIDVMessage() {
		return readProperty("zero.idv.message");
	}

	public String promoCodeNotApplicable() {
		return readProperty("promocode.notapplicable.message");
	}

	public String declinedModelsMessage() {
		return readProperty("declined.model.message");
	}

	public String registrationNoInvalid() {
		return readProperty("registration.no.invalid");
	}

	public String policyNoRequired() {
		return readProperty("policyno.required");
	}

	public String policyNoInvalid() {
		return readProperty("policy.no.invalid");
	}

	public String policyTypeMismatch() {
		return readProperty("policy.type.mismatch");
	}

	public String policyNameMismatch() {
		return readProperty("policy.name.invalid");
	}

	public String agentDetailsInvalid() {
		return readProperty("agent.details.invalid");
	}

	public String passangersUnderPersonnelAccidentCoverLimitInvalid() {
		return readProperty("passangersUnderPersonnelAccidentCoverLimit.invalid");
	}

	public String paValueAutoInsuredPersonsLimitInvalid() {
		return readProperty("paValueAutoInsuredPersonsLimit.invalid");
	}

	public String availVoluntaryExcessDiscountInvalid() {
		return readProperty("availVoluntaryExcessDiscount.invalid");
	}

	public String premiumKeyRequired() {
		return readProperty("premium.key.required");
	}

	public String premiumKeyInvalid() {
		return readProperty("premium.key.invalid");
	}

	public String promoCodeInvalid() {
		return readProperty("promo.code.invalid");
	}

	public String promoCodeRequired() {
		return readProperty("promo.code.required");
	}

	public String emailRequired() {
		return readProperty("emailId.required");
	}

	public String usernameRequired() {
		return readProperty("username.required");
	}
	
	public String passwordRequired() {
		return readProperty("password.required");
	}

	public String invalidLoginCredentials() {
		return readProperty("invalid.login.credentials");
	}
	
	public String oldPasswordMismatch() {
		return readProperty("old.password.mismatch");
	}

	public String emailNotFound() {
		return readProperty("email.notfound");
	}

	public String searchNumberRequired() {
		return readProperty("searchnumber.required");
	}

	public String registrationNoRequired() {
		return readProperty("registrationno.required");
	}

	public String registrationNoRtoMismatch() {
		return readProperty("registrationno.rto.mismatch");
	}

	public String registrationNoRtoInvalid() {
		return readProperty("registrationno.rto.invalid");
	}

	public String registrationNoRtoCityInvalid() {
		return readProperty("registrationno.rto.city.invalid");
	}

	public String engineNoRequired() {
		return readProperty("engineno.required");
	}

	public String engineNoMinLength() {
		return readProperty("engineno.minlength");
	}

	public String engineNoMaxLength() {
		return readProperty("engineno.maxlength");
	}

	public String chasisNoRequired() {
		return readProperty("chasisno.required");
	}

	public String chasisNoMinLength() {
		return readProperty("chasisno.minlength");
	}

	public String chasisNoMaxLength() {
		return readProperty("chasisno.maxlength");
	}

	public String previousPolicyNoRequired() {
		return readProperty("previous.policyno.required");
	}

	public String previousPolicyNoInvalid() {
		return readProperty("previous.policyno.invalid");
	}

	public String previousPolicyNoMaxLength() {
		return readProperty("previous.policyno.maxlength");
	}

	public String previousInsurerRequired() {
		return readProperty("previous.insurer.required");
	}

	public String previousInsurerInvalid() {
		return readProperty("previous.insurer.invalid");
	}

	public String hypothecationInvalid() {
		return readProperty("hypothecation.invalid");
	}

	public String pucCertificateNumberRequired() {
		return readProperty("puc.certificate.number.required");
	}

	public String pucCertificateNumberMaxlength() {
		return readProperty("puc.certificate.number.maxlength");
	}

	public String pucCertificateEndDateRequired() {
		return readProperty("puc.certificate.enddate.required");
	}

	public String pucCertificateEndDateInvalid() {
		return readProperty("puc.certificate.enddate.invalid");
	}

	public String pucCertificateEndDateRangeInvalid() {
		return readProperty("puc.certificate.enddate.range.invalid");
	}

	public String firstNameRequired() {
		return readProperty("firstname.required");
	}

	public String firstnameInvalid() {
		return readProperty("firstname.invalid");
	}

	public String firstNameMaxlength() {
		return readProperty("firstname.maxlength");
	}

	public String lastNameRequired() {
		return readProperty("lastname.required");
	}

	public String lastnameInvalid() {
		return readProperty("lastname.invalid");
	}

	public String lastNameMaxlength() {
		return readProperty("lastname.maxlength");
	}

	public String nameRequired() {
		return readProperty("name.required");
	}

	public String nameMaxlength() {
		return readProperty("name.maxlength");
	}

	public String mobileRequired() {
		return readProperty("mobile.required");
	}

	public String mobileInvalid() {
		return readProperty("mobile.invalid");
	}

	public String emergencyContactMobileInvalid() {
		return readProperty("emergency.mobile.invalid");
	}

	public String paownerDriverNomineeRequired() {
		return readProperty("paowner.driver.nominee.required");
	}

	public String paownerDriverNomineeMaxlength() {
		return readProperty("paowner.driver.nominee.maxlength");
	}

	public String paownerDriverNomineeRelationshipRequired() {
		return readProperty("paowner.driver.nominee.relationship.required");
	}

	public String genderRequired() {
		return readProperty("gender.required");
	}

	public String genderInvalid() {
		return readProperty("gender.invalid");
	}

	public String genderMismatch() {
		return readProperty("gender.mismatch");
	}

	public String gstinNoLength() {
		return readProperty("gstin.length");
	}

	public String gstinNoInvalid() {
		return readProperty("gstin.invalid");
	}

	public String gstinNoMismatch() {
		return readProperty("gstin.mismatch");
	}

	public String gstinLegalNameProposerNameMismatch() {
		return readProperty("gstin.proposername.mismatch");
	}

	public String insuredAadharNumberInvalid() {
		return readProperty("insured.aadhar.number.invalid");
	}

	public String insuredPanNumberInvalid() {
		return readProperty("insured.pan.number.invalid");
	}

	public String insuredPanNumberMismatch() {
		return readProperty("insured.pan.number.mismatch");
	}

	public String addressRequired() {
		return readProperty("address.required");
	}

	public String address1Required() {
		return readProperty("address1.required");
	}

	public String address1Maxlength() {
		return readProperty("address1.maxlength");
	}

	public String address2Required() {
		return readProperty("address2.required");
	}

	public String address2Maxlength() {
		return readProperty("address2.maxlength");
	}

	public String address3Maxlength() {
		return readProperty("address3.maxlength");
	}

	public String address4Maxlength() {
		return readProperty("address4.maxlength");
	}

	public String pincodeRequired() {
		return readProperty("address.pincode.required");
	}

	public String pincodeLength() {
		return readProperty("address.pincode.length");
	}

	public String pincodeInvalid() {
		return readProperty("address.pincode.invalid");
	}

	public String pincodeBlocked() {
		return readProperty("address.pincode.blocked");
	}

	public String cityCodeRequired() {
		return readProperty("address.citycode.required");
	}

	public String cityCodeMaxlength() {
		return readProperty("address.citycode.maxlength");
	}

	public String stateCodeRequired() {
		return readProperty("address.statecode.required");
	}

	public String stateCodeMaxlength() {
		return readProperty("address.statecode.maxlength");
	}

	public String townCodeRequired() {
		return readProperty("address.towncode.required");
	}

	public String keralaPinCodeMismatch() {
		return readProperty("kerala.pincode.mismatch");
	}

	public String keralaPinCodeInvalid() {
		return readProperty("kerala.pincode.invalid");
	}

	public String firstNameDiscountMismatch() {
		return readProperty("discount.first.name.mismatch");
	}

	public String lastNameDiscountMismatch() {
		return readProperty("discount.last.name.mismatch");
	}

	public String pinCodeDiscountMismatch() {
		return readProperty("discount.pincode.mismatch");
	}

	public String userCreationError() {
		return readProperty("user.create.error");
	}

	public String userAlreadyRegistered() {
		return readProperty("user.already.registered");
	}
	
	public String duplicateUsername() {
		return readProperty("user.duplicate.username");
	}

	public String userAddressUpdateFailed() {
		return readProperty("user.address.update.failed");
	}

	public String invalidUserCredentials() {
		return readProperty("user.invalid.credentials");
	}

	public String townCodeInvalid() {
		return readProperty("user.account.update.error");
	}

	public String crmRenewalExit() {
		return readProperty("crm.renewal.exit");
	}

	public String crmRenewalNotExit() {
		return readProperty("crm.renewal.not.exit");
	}

	public String crmRenewalExitBranch74() {
		return readProperty("crm.renewal.exit.branch74");
	}

	public String runTimeErrorMessage() {
		return readProperty("runtime.error.message");
	}

	public String exceptionError() {
		return readProperty("exception.error.message");
	}
	
	public String sessionTimeoutErrorMessage() {
		return readProperty("session-timeout.error.message");
	}

	public String concurrentSessionErrorMessage() {
		return readProperty("concurrent-session.error.message");
	}

	public String agentInvalidContractTypeErrorMessage() {
		return readProperty("agent-invalid.contract-type.error.message");
	}

	public String quoteIdInvalid() {
		return readProperty("quoteid.invalid");
	}

	public String quoteIdExpired() {
		return readProperty("quoteid.expired");
	}

	public String tpInsurerRequired() {
		return readProperty("tp.insurer.required");
	}

	public String tpInsurerInvalid() {
		return readProperty("tp.insurer.invalid");
	}

	public String tpPolicyRequired() {
		return readProperty("tp.policy.required");
	}

	public String tpPolicyInvalid() {
		return readProperty("tp.policy.invalid");
	}

	public String tpExpirationMismtach() {
		return readProperty("tp.expiration.mismtach");
	}

	public String tpExpirationInvalid() {
		return readProperty("tp.expiration.invalid");
	}

	public String tpInceptionInvalid() {
		return readProperty("tp.inception.invalid");
	}

	public String tpExpirationLess() {
		return readProperty("tp.expiration.less");
	}

	public String tpExpirationCurrentDateGreater() {
		return readProperty("tp.expiration.current.greater");
	}

	public String registrationNoMismatch() {
		return readProperty("registration.no.mismatch");
	}

	public String longTermRenewalError() {
		return readProperty("longterm.renewal.error");
	}

	public String policyAlreadyExpired() {
		return readProperty("policy.already.expired");
	}

	public String policyRenewalRestriction() {
		return readProperty("policy.renewal.restriction");
	}

	public String policyRenewalRestrictionClaim() {
		return readProperty("policy.renewal.restriction.claim");
	}

	public String policyRenewalRestrictionMemberListBlank() {
		return readProperty("policy.renewal.restriction.nomembers");
	}

	public String policyRenewalDaysRestriction(int days) {
		return MessageFormat.format(readProperty("policy.renewal.days.restriction"), days);
	}

	public String majorDestinationRequired() {
		return readProperty("majordestination.required");
	}

	public String majorDestinationInvalid() {
		return readProperty("majordestination.invalid");
	}

	public String dateOfBirthRequired() {
		return readProperty("dateofbirth.required");
	}

	public String dateOfBirthInvalid() {
		return readProperty("dateofbirth.invalid");
	}

	public String dateOfBirthRange() {
		return readProperty("dateofbirth.range");
	}

	public String occupationRequired() {
		return readProperty("occupation.required");
	}

	public String relationshipToBeneficiaryRequired() {
		return readProperty("relationshiptobeneficiary.required");
	}

	public String relationshipToProposerRequired() {
		return readProperty("relationshiptoproposer.required");
	}

	public String relationshipToInsuredRequired() {
		return readProperty("relationshiptoinsured.required");
	}

	public String passportNoRequired() {
		return readProperty("passportno.required");
	}

	public String loanAccountNumberMaxLength() {
		return readProperty("loanBranchCodeRequired.maxlength");
	}

	public String loanAccountNoInvalid() {
		return readProperty("loanAccountNo.invalid");
	}

	public String loanBranchCodeRequired() {
		return readProperty("loanBranchCodeRequired.required");
	}

	public String leadGeneratorCodeRequired() {
		return readProperty("leadGeneratorCodeRequired.required");
	}

	public String leadGeneratorCodeInvalid() {
		return readProperty("leadGeneratorCode.invalid");
	}

	public String leadGeneratorCodeMaxLength() {
		return readProperty("leadGeneratorCode.maxlength");
	}

	public String loanBrachCodeMaxLength() {
		return readProperty("loanBrachCode.maxlength");
	}

	public String loanBrachCodeInvalid() {
		return readProperty("loanBrachCodeInvalid.invalid");
	}

	public String passportNoInvalid() {
		return readProperty("passportno.invalid");
	}

	public String beneficiaryRequired() {
		return readProperty("beneficiary.required");
	}

	public String beneficiaryMaxlength() {
		return readProperty("beneficiary.maxlength");
	}

	public String travelSportsPersonRestriction() {
		return readProperty("travel.sportsperson.restriction");
	}

	public String travelMedicalTreatmentRestriction() {
		return readProperty("travel.medicaltreatment.restriction");
	}

	public String travelCurrentlyInIndiaRestriction() {
		return readProperty("travel.currentlyinindia.restriction");
	}

	public String travelDangerousSportsRestriction() {
		return readProperty("travel.dangeroussports.restriction");
	}

	public String travelTripDurationRestriction() {
		return readProperty("travel.tripduration.restriction");
	}

	public String travelAgeGroupRestriction() {
		return readProperty("travel.agegroup.restriction");
	}

	public String travelPremiumPlanRequired() {
		return readProperty("travel.premiumplan.required");
	}

	public String insuredFirstNameRequired() {
		return readProperty("insured.firstname.required");
	}

	public String insuredFirstNameMaxlength() {
		return readProperty("insured.firstname.maxlength");
	}

	public String insuredLastNameRequired() {
		return readProperty("insured.lastname.required");
	}

	public String insuredLastNameMaxlength() {
		return readProperty("insured.lastname.maxlength");
	}

	public String emailInvalid() {
		return readProperty("emailId.invalid");
	}

	public String expirationDateRequired() {
		return readProperty("expiration-date.required");
	}

	public String expirationDateInvalid() {
		return readProperty("expiration-date.invalid");
	}

	public String expirationDateMin() {
		return readProperty("expiration-date.min");
	}

	public String motorNewPolicyRestricted() {
		return readProperty("policy.motor.new.restriction");
	}

	public String thirdPartyIDVRestriction() {
		return readProperty("policy.third.party.idv.restriction");
	}

	public String idvNullError() {
		return readProperty("policy.idv.null.error");
	}

	public String comprehensiveIDVRestriction() {
		return readProperty("policy.comprehensive.idv.restriction");
	}

	public String highIDVRestriction() {
		return readProperty("policy.high.idv.restriction");
	}

	public String minIDVRestriction() {
		return readProperty("policy.min.idv.restriction");
	}

	public String maxIDVRestriction() {
		return readProperty("policy.max.idv.restriction");
	}

	public String maxNCBRestriction() {
		return readProperty("policy.max.ncb.restriction");
	}

	public String maxNCBRestrictionSudarshan() {
		return readProperty("policy.max.ncb.restriction.sudarshan");
	}

	public String maxNCBNotApplicable() {
		return readProperty("policy.ncb.not-applicable");
	}

	public String invalidCubicCapacity() {
		return readProperty("policy.cc.invalid");
	}

	public String invalidSeatingCapacity() {
		return readProperty("policy.sc.invalid");
	}

	public String motorMaxDiscountRestriction() {
		return readProperty("policy.motor.max.discount.capacity");
	}

	public String motorTWPPolicyPeroidRestricton() {
		return readProperty("policy.period.twp.restriction");
	}

	public String motorValueAutoRestriction() {
		return readProperty("policy.value.auto.restriction");
	}

	public String motorExpirationDateDifference() {
		return readProperty("policy.motor.expiration.date.difference");
	}

	public String invalidPAtoPassanger() {
		return readProperty("policy.invalid.pa.passanger");
	}

	public String bankLockerHolderNameRequired() {
		return readProperty("banklocker.holdername.required");
	}

	public String bankLockerHolderNameMaxlength() {
		return readProperty("banklocker.holdername.maxlength");
	}

	public String bankLockerSumInsuredRequired() {
		return readProperty("banklocker.suminsured.required");
	}

	public String bankLockerSumInsuredInvalid() {
		return readProperty("banklocker.suminsured.invalid");
	}

	public String bankNameRequired() {
		return readProperty("banklocker.bankname.required");
	}

	public String bankNameInvalid() {
		return readProperty("banklocker.bankname.invalid");
	}

	public String lockerNumberRequired() {
		return readProperty("banklocker.lockernumber.required");
	}

	public String lockerNumberInvalid() {
		return readProperty("banklocker.lockernumber.invalid");
	}

	public String documentSumInsuredRequired() {
		return readProperty("banklocker.documentsuminsured.required");
	}

	public String documentSumInsuredInvalid() {
		return readProperty("banklocker.documentsuminsured.invalid");
	}

	public String existedPolicyNumberRequired() {
		return readProperty("banklocker.existedPolicyNumber.required");
	}

	public String existedPolicyNumberInvalid() {
		return readProperty("banklocker.existedPolicyNumber.invalid");
	}

	public String proposerFirstNameRequired() {
		return readProperty("banklocker.proposerfirstname.required");
	}

	public String proposerFirstNameMaxlength() {
		return readProperty("banklocker.proposerfirstname.maxlength");
	}

	public String proposerLastNameRequired() {
		return readProperty("banklocker.proposerlastname.required");
	}

	public String proposerLastNameMaxlength() {
		return readProperty("banklocker.proposerlastname.maxlength");
	}

	public String proposerAgeLimitMin() {
		return readProperty("banklocker.proposer.agelimit.min");
	}

	public String renewalAlreadyExist() {
		return readProperty("itgi.renewal.already.exist");
	}

	public String whereClauseRequired() {
		return readProperty("policy.generate.whereclause.required");
	}

	public String whereClauseInvalid() {
		return readProperty("policy.generate.whereclause.invalid");
	}

	public String whereClauseDateRangeInvalid() {
		return readProperty("policy.generate.whereclause.daterange.invalid");
	}

	public String whereClauseDateRangeDisallow() {
		return readProperty("policy.generate.whereclause.daterange.disallow");
	}

	public String unauthorizeAccess() {
		return readProperty("user.unauthorize.access");
	}

	public String userMobileInvalid() {
		return readProperty("user.mobile.invalid");
	}

	public String userForgetPasswordSuccess() {
		return readProperty("user.forget.password.success");
	}

	public String userIdRequired() {
		return readProperty("userId.required");
	}

	public String planTypeRequired() {
		return readProperty("gender.required");
	}

	public String planTypeInvalid() {
		return readProperty("gender.invalid");
	}

	public String healthAdultMemberRequired() {
		return readProperty("health.adult.member.required");
	}

	public String healthInvalidAdultAge() {
		return readProperty("health.adult.invalid.age");
	}

	public String healthInvalidChildAge() {
		return readProperty("health.child.invalid.age");
	}

	public String healthInvalidSumInsured() {
		return readProperty("health.invalid.suminsured");
	}

	public String healthInvalidBenefitPeriod() {
		return readProperty("health.invalid.benefitPeriod");
	}

	public String healthInvalidApplicantAge() {
		return readProperty("health.invalid.applicant.age");
	}

	public String healthInvalidApplicantAgeMismatchWithSelf() {
		return readProperty("health.invalid.applicant.age.mismatch.with.self");
	}

	public String healthInvalidApplicantGenderMismatchWithSelf() {
		return readProperty("health.invalid.applicant.gender.mismatch.with.self");
	}

	public String healthInvalidMemberFullnameMismatchWithSelf() {
		return readProperty("health.invalid.member.fullname.mismatch.with.self");
	}

	public String healthInvalidMemberFirstnameMismatchWithSelf() {
		return readProperty("health.invalid.member.first.name.mismatch.with.self");
	}

	public String healthInvalidMemberLastnameMismatchWithSelf() {
		return readProperty("health.invalid.member.last.name.mismatch.with.self");
	}

	public String healthEmergencyContactNameRequired() {
		return readProperty("health.emergency.contact.name.required");
	}

	public String healthEmergencyContactNameMaxLength() {
		return readProperty("health.emergency.contact.name.max.length");
	}

	public String healthNomineeNameRequired() {
		return readProperty("health.nominee.name.required");
	}

	public String healthNomineeNameMaxLength() {
		return readProperty("health.nominee.name.max.length");
	}

	public String healthNomineeFirstNameRequired() {
		return readProperty("health.nominee.nomineeFirstName.required");
	}

	public String healthNomineeFirstNameMaxLength() {
		return readProperty("health.nominee.nomineeFirstName.max.length");
	}

	public String healthNomineeLastNameRequired() {
		return readProperty("health.nominee.nomineeLastName.required");
	}

	public String healthNomineeLastNameMaxLength() {
		return readProperty("health.nominee.nomineeLastName.max.length");
	}

	public String healthNomineeRealtionShipRequired() {
		return readProperty("health.nominee.relationship.required");
	}

	public String healthNomineeAddress1Required() {
		return readProperty("health.nominee.address1.required");
	}

	public String healthNoimeeAddress1MaxLength() {
		return readProperty("health.nominee.address1.max.length");
	}

	public String healthNomineeAddress2Required() {
		return readProperty("health.nominee.address2.required");
	}

	public String healthNoimeeAddress2MaxLength() {
		return readProperty("health.nominee.address2.max.length");
	}

	public String healthNoimeeAddressPincodeRequired() {
		return readProperty("health.nominee.address.pincode.required");
	}

	public String healthNoimeeAddressPincodeInvalid() {
		return readProperty("health.nominee.address.pincode.invalid");
	}

	public String healthNoimeeAddressCityCodeRequired() {
		return readProperty("health.nominee.address.citycode.required");
	}

	public String healthNoimeeAddressCityCodeMaxlength() {
		return readProperty("health.nominee.address.citycode.maxlength");
	}

	public String healthNoimeeAddressStateCodeRequired() {
		return readProperty("health.nominee.address.statecode.required");
	}

	public String healthNoimeeAddressStateCodeMaxlength() {
		return readProperty("health.nominee.address.statecode.maxlength");
	}

	public String healthNoimeeAddressTownCodeRequired() {
		return readProperty("health.nominee.address.towncode.required");
	}

	public String healthKYCDocumentRequired() {
		return readProperty("health.kyc.document.required");
	}

	public String healthKYCDocumentNoRequired() {
		return readProperty("health.kyc.document.no.required");
	}

	public String healthRelationshipRequired() {
		return readProperty("health.relationship.required");
	}

	public String healthRelationshipInvalid() {
		return readProperty("health.relationship.invalid");
	}

	public String healthHeighRequired() {
		return readProperty("health.height.required");
	}

	public String healthWeightRequired() {
		return readProperty("health.weight.required");
	}

	public String healthAlcoholConsumptionRequired() {
		return readProperty("health.alcohol.required");
	}

	public String healthCigarreteConsumtionRequired() {
		return readProperty("health.cigarette.required");
	}

	public String healthTobaccoConsumptionRequired() {
		return readProperty("health.tobacco.required");
	}

	public String invalidElectionCard() {
		return readProperty("kyc.election.card.invalid");
	}

	public String kycMobileRequired() {
		return readProperty("kyc.mobile.required");
	}

	public String healthSelfMemberRequired() {
		return readProperty("health.self.member.required");
	}

	public String healthPreExistingDisease() {
		return readProperty("health.preexisting.disease");
	}

	public String healthPolicyTypeRequired() {
		return readProperty("health.policy.type.required");
	}

	public String healthRenewalMaxAgeNotAllowed() {
		return readProperty("health.renewal.max.age.not.allowed");
	}

	public String healthContractTypeMismatchInRenewal() {
		return readProperty("health.renewal.contractType.mismatch");
	}

	public String affinityPageTypeRequired() {
		return readProperty("affinity.pageType.required");
	}

	public String affinityFullNameRequired() {
		return readProperty("affinity.fullname.required");
	}

	public String affinityContactNoRequired() {
		return readProperty("affinity.contactNo.required");
	}

	public String affinityContactNoInvalid() {
		return readProperty("affinity.contactNo.invalid");
	}

	public String affinityEmailRequired() {
		return readProperty("affinity.email.required");
	}

	public String affinityEmailInvalid() {
		return readProperty("affinity.email.invalid");
	}

	public String affinityProductNoRequired() {
		return readProperty("affinity.productNo.required");
	}

	public String affinityInvoiceNoRequired() {
		return readProperty("affinity.invoiceNo.required");
	}

	public String affinityInvoiceValueRequired() {
		return readProperty("affinity.invoiceValue.required");
	}

	public String affinityDealerNameRequired() {
		return readProperty("affinity.dealerName.required");
	}

	public String affinityDealerLocationRequired() {
		return readProperty("affinity.dealerLocation.required");
	}

	public String affinityCertificateNoRequired() {
		return readProperty("affinity.certificateNo.required");
	}

	public String affinityInvoiceDateRequired() {
		return readProperty("affinity.invoiceDate.required");
	}

	public String affinityLossLocationRequired() {
		return readProperty("affinity.lossLocation.required");
	}

	public String affinityLossAmountRequired() {
		return readProperty("affinity.repairBillAmount.required");
	}

	public String affinityLossLocationInvalid() {
		return readProperty("affinity.lossDescription.invalid");
	}

	public String affinityLossDateRequired() {
		return readProperty("affinity.lossDate.required");
	}

	public String affinityLossTypeRequired() {
		return readProperty("affinity.lossType.required");
	}

	public String affinityCauseTypeRequired() {
		return readProperty("affinity.causeType.required");
	}

	public String affinityLossDescriptionRequired() {
		return readProperty("affinity.lossDescription.required");
	}

	public String affinityLossDescriptionInvalid() {
		return readProperty("affinity.lossDescription.invalid");
	}

	public String affinityInvoiceCopyRequired() {
		return readProperty("affinity.invoiceCopy.required");
	}

	public String affinityInvoiceCopyLengthExceed() {
		return readProperty("affinity.invoiceCopy.exceed");
	}

	public String affinityInvoiceCopyImageSizeExceed() {
		return readProperty("affinity.invoiceCopy.imageSizeExceed");
	}

	public String affinityInvoiceCopyInvalidFileType() {
		return readProperty("affinity.invoiceCopy.invalidFileType");
	}

	public String affinityInvoiceCopyPdfSizeExceed() {
		return readProperty("affinity.invoiceCopy.pdfSizeExceed");
	}

	public String affinityCancelledChequeRequired() {
		return readProperty("affinity.cancelledCheque.required");
	}

	public String affinityCancelledChequeLengthExceed() {
		return readProperty("affinity.cancelledCheque.exceed");
	}

	public String affinityCancelledChequeImageSizeExceed() {
		return readProperty("affinity.cancelledCheque.imageSizeExceed");
	}

	public String affinityCancelledChequeInvalidFileType() {
		return readProperty("affinity.cancelledCheque.invalidFileType");
	}

	public String affinityCancelledChequePdfSizeExceed() {
		return readProperty("affinity.cancelledCheque.pdfSizeExceed");
	}

	public String affinityDamagedProductPhotoRequired() {
		return readProperty("affinity.damagedProductPhoto.required");
	}

	public String affinityDamagedProductPhotoLengthExceed() {
		return readProperty("affinity.damagedProductPhoto.exceed");
	}

	public String affinityDamagedProductPhotoImageSizeExceed() {
		return readProperty("affinity.damagedProductPhoto.imageSizeExceed");
	}

	public String affinityDamagedProductPhotoInvalidFileType() {
		return readProperty("affinity.damagedProductPhoto.invalidFileType");
	}

	public String affinityDamagedProductPhotoPdfSizeExceed() {
		return readProperty("affinity.damagedProductPhoto.pdfSizeExceed");
	}

	public String affinityRepairBillCopyRequired() {
		return readProperty("affinity.repairBillCopy.required");
	}

	public String affinityRepairBillCopyLengthExceed() {
		return readProperty("affinity.repairBillCopy.exceed");
	}

	public String affinityRepairBillCopyImageSizeExceed() {
		return readProperty("affinity.repairBillCopy.imageSizeExceed");
	}

	public String affinityRepairBillCopyInvalidFileType() {
		return readProperty("affinity.repairBillCopy.invalidFileType");
	}

	public String affinityRepairBillCopyPdfSizeExceed() {
		return readProperty("affinity.repairBillCopy.pdfSizeExceed");
	}

	public String affinityFirCopyRequired() {
		return readProperty("affinity.firCopy.required");
	}

	public String affinityFirCopyLengthExceed() {
		return readProperty("affinity.firCopy.exceed");
	}

	public String affinityFirCopyImageSizeExceed() {
		return readProperty("affinity.firCopy.imageSizeExceed");
	}

	public String affinityFirCopyInvalidFileType() {
		return readProperty("affinity.firCopy.invalidFileType");
	}

	public String affinityFirCopyPdfSizeExceed() {
		return readProperty("affinity.firCopy.pdfSizeExceed");
	}

	public String affinityKycDocumentsRequired() {
		return readProperty("affinity.kycDocuments.required");
	}

	public String affinityKycDocumentsLengthExceed() {
		return readProperty("affinity.kycDocuments.exceed");
	}

	public String affinityKycDocumentsImageSizeExceed() {
		return readProperty("affinity.kycDocuments.imageSizeExceed");
	}

	public String affinityKycDocumentsInvalidFileType() {
		return readProperty("affinity.kycDocuments.invalidFileType");
	}

	public String affinityKycDocumentsPdfSizeExceed() {
		return readProperty("affinity.kycDocuments.pdfSizeExceed");
	}

	public String mosbiteNoOfMembersRequired() {
		return readProperty("mbp.noofmembers.required");
	}

	public String mosbiteSumInsuredRequired() {
		return readProperty("mbp.suminsured.required");
	}

	public String mosbiteSumInsuredInvalid() {
		return readProperty("mbp.suminsured.invalid");
	}

	public String mosbiteDateOfBirthInvalid() {
		return readProperty("mbp.dateofbirth.invalid");
	}

	public String mosBitePolicyPeriodRequired() {
		return readProperty("mbp.policyPeriod.required");
	}

	public String mosBiteFirstNameRequired() {
		return readProperty("mbp.firstName.required");
	}

	public String mosBiteLastNameRequired() {
		return readProperty("mbp.lastName.required");
	}

	public String mosBiteGenderRequired() {
		return readProperty("mbp.gender.required");
	}

	public String mosBiteRelationshipRequired() {
		return readProperty("mbp.relationship.required");
	}

	public String mosBiteRelationshipMax() {
		return readProperty("mbp.relationship.max");
	}

	public String mosBiteDiagnosedWithLymphaticRequired() {
		return readProperty("mbp.diagnosedWithLymphatic.basicCriteriaFailed");
	}

	public String mosBitePromoCodeRequired() {
		return readProperty("mbp.promoCode.required");
	}

	public String mosBiteNomineeNameRequired() {
		return readProperty("mbp.nomineeName.required");
	}

	public String mosBiteNomineeRelationshipRequired() {
		return readProperty("mbp.nomineeRelationship.required");
	}

	public String microRuralNoOfMembersRequired() {
		return readProperty("msi.noofmembers.required");
	}

	public String microRuralMemberSizeInvalid() {
		return readProperty("msi.membersize.invalid");
	}

	public String microRuralNomineeNameRequired() {
		return readProperty("msi.nomineename.required");
	}

	public String microRuralNomineeRelationshipRequired() {
		return readProperty("msi.nomineerelationship.required");
	}

	public String microRuralDateOfBirthInvalid() {
		return readProperty("msi.dateofbirth.invalid");
	}

	public String microRuralGenderInvalid() {
		return readProperty("msi.gender.invalid");
	}

	public String microRuralAgenthNumberRequired() {
		return readProperty("msi.agent.number.required");
	}

	public String insuredPanNumberRequired() {
		return readProperty("msi.insured.pan.number.required");
	}

	public String hospitalEmpanelmentProviderNameRequred() {
		return readProperty("hospitalempanelment.providerName.required");
	}

	public String hospitalEmpanelmentProviderNameInvalid() {
		return readProperty("hospitalempanelment.providerName.invalid");
	}

	public String hospitalEmpanelmentAddressLaneRequred() {
		return readProperty("hospitalempanelment.addressLane.required");
	}

	public String hospitalEmpanelmentAddressLaneInvalid() {
		return readProperty("hospitalempanelment.addressLane.invalid");
	}

	public String hospitalEmpanelmentNoOfBedsRequired() {
		return readProperty("hospitalempanelment.NoOfBeds.required");
	}

	public String hospitalEmpanelmentNoOfBedsInvalid() {
		return readProperty("hospitalempanelment.NoOfBeds.invalid");
	}

	public String hospitalEmpanelmentAccountNoRequired() {
		return readProperty("hospitalempanelment.AccountNo.required");
	}

	public String hospitalEmpanelmentAccountNoInvalid() {
		return readProperty("hospitalempanelment.AccountNo.invalid");
	}

	public String hospitalEmpanelmentIFSCCodeRequired() {
		return readProperty("hospitalempanelment.IFSCCode.required");
	}

	public String hospitalEmpanelmentIFSCCodeInvalid() {
		return readProperty("hospitalempanelment.IFSCCode.invalid");
	}

	public String hospitalEmpanelmentHospitalBankNameeRequired() {
		return readProperty("hospitalempanelment.hospitalBankName.required");
	}

	public String hospitalEmpanelmentChequeInFavourOfRequired() {
		return readProperty("hospitalempanelment.chequeInFavourOf.required");
	}

	public String oemRenewalRedirectMessage() {
		return readProperty("oem.renewal.redirect.message");
	}

	public String ahpFieldMandatory() {
		return readProperty("ahp.field.mandatory");
	}

	public String ahpLowerSIRestriction() {
		return readProperty("ahp.suminsured.lower.limit.restriction");
	}

	public String ahpUpperSIRestriction() {
		return readProperty("ahp.suminsured.upper.limit.restriction");
	}

	public String ahpBurglaryBuildingRestriction() {
		return readProperty("ahp.burglary.building.restriction");
	}

	public String ahpBurglaryBuildingSIRestriction() {
		return readProperty("ahp.burglary.building.si.restriction");
	}

	public String ahpBurglaryContentSIRestriction() {
		return readProperty("ahp.burglary.content.si.restriction");
	}

	public String ahpSDIUpperSIRestriction() {
		return readProperty("ahp.sdi.suminsured.upper.limit.restriction");
	}

	public String ahpLoanSIUpperSIRestriction() {
		return readProperty("ahp.loan.suminsured.upper.limit.restriction");
	}

	public String ahpLoanParticularRequired() {
		return readProperty("ahp.loan.loanparticulars.required");
	}

	public String ahpLowerLoanAmountRestriction() {
		return readProperty("ahp.loanamount.lower.limit.restriction");
	}

	public String ahpUpperLoanAmountRestriction() {
		return readProperty("ahp.loanamount.upper.limit.restriction");
	}

	public String ahpLoanMonthlyInstallmentRequired() {
		return readProperty("ahp.monthly.installment.required");
	}

	public String ahpInvalidMonlthlyInstallment() {
		return readProperty("ahp.monthly.installment.invalid");
	}

	public String ahpLowerLoanTermRestriction() {
		return readProperty("ahp.loan.term.lower.limit.restriction");
	}

	public String ahpUpperLoanTermRestriction() {
		return readProperty("ahp.loan.term.upper.limit.restriction");
	}

	public String ahpLoanFinancialInstitutionRequired() {
		return readProperty("ahp.loan.financial.institution.required");
	}

	public String ahpPersonalAccidentInsuredNameRequired() {
		return readProperty("ahp.personal.accident.insuredname.required");
	}

	public String ahpPersonalAccidentDOBRequired() {
		return readProperty("ahp.personal.accident.dob.required");
	}

	public String ahpPersonalAccidentInvalidAge() {
		return readProperty("ahp.personal.accident.invalid.age");
	}

	public String ahpPersonalAccidentNomineeRelationshipRequired() {
		return readProperty("ahp.personal.accident.nominee.relationship.required");
	}

	public String ahpPersonalAccidentNomineeNameRequired() {
		return readProperty("ahp.personal.accident.nominee.name.required");
	}

	public String ahpPersonalAccidentAnnualIncomeRequired() {
		return readProperty("ahp.personal.accident.annual.income.required");
	}

	public String ahpHEEAndPCDescriptionRequired() {
		return readProperty("ahp.hee.pc.description.required");
	}

	public String ahpHEEAndPCSerialNoRequired() {
		return readProperty("ahp.hee.pc.serialnumber.required");
	}

	public String ahpHEEAndPCBrandRequired() {
		return readProperty("ahp.hee.pc.brand.required");
	}

	public String ahpHEEAndPCYearOfManufactureRequired() {
		return readProperty("ahp.hee.pc.yom.required");
	}

	public String ahpHEEAndPCYearOfManufactureInvalid() {
		return readProperty("ahp.hee.pc.accident.yom.invalid");
	}

	public String ahpPedalCycleMakeRequired() {
		return readProperty("ahp.pedal.cycle.make.required");
	}

	public String ahpPedalCycleFrameNoRequired() {
		return readProperty("ahp.pedal.cycle.frameno.required");
	}

	public String ahpFireAlliedPerilsMandatory() {
		return readProperty("ahp.fire.allied.perils.mandatory");
	}

	public String ahpMinimumSectionsMandatory() {
		return readProperty("ahp.min.sections.mandatory");
	}

	public String wwcMembersRequired() {
		return readProperty("wwc.members.required");
	}

	public String wwcDescriptionOfEmployeeRequired() {
		return readProperty("wwc.description.of.employee.required");
	}

	public String wwcNoOfEmployeeRequired() {
		return readProperty("wwc.no.of.employee.required");
	}

	public String wwcMonthlyWagePerEmployeeRequired() {
		return readProperty("wwc.monthly.wage.per.employee.required");
	}

	public String wwcPolicyDurationRequired() {
		return readProperty("wwc.policy.duration.required");
	}

	public String wwcBusinessCategoryRequired() {
		return readProperty("wwc.business.category.required");
	}

	public String wwcBusinessClassificationNumberRequired() {
		return readProperty("wwc.business.classification.number.required");
	}

	public String wwcRiskLocationRequired() {
		return readProperty("wwc.risk.location.required");
	}

	public String wwcIndustryTypeRequired() {
		return readProperty("wwc.industry.type.required");
	}

	public String wwcAccountNameRequired() {
		return readProperty("wwc.account.name.required");
	}

	public String wwcAccountNameInvalid() {
		return readProperty("wwc.account.name.invalid");
	}

	public String wwcClassNumberInvaild() {
		return readProperty("wwc.class.number.invalid");
	}

	public String ahpConstructionYearRequired() {
		return readProperty("ahp.property.constructionYear.required");
	}

	public String ahpConstructionYearInvalid() {
		return readProperty("ahp.property.constructionYear.invalid");
	}

	public String ahpBuildingTypeRequired() {
		return readProperty("ahp.property.buildingType.required");
	}

	public String ahpPolicyIssuredInFavourOfRequired() {
		return readProperty("ahp.property.policyIssuedInFavourOf.required");
	}

	public String ahpPolicyIssuedInFavourOfInvalid() {
		return readProperty("ahp.property.policyIssuedInFavourOf.invalid");
	}

	public String ahpFieldLengthInvalid() {
		return readProperty("ahp.field.maxlength");
	}

	public String ahpMinimumPremiumLimit() {
		return readProperty("ahp.minimum.premium.limit");
	}

	public String suvidhaHouseNoRequired() {
		return readProperty("suvidha.house.no.required");
	}

	public String suvidhaHouseNoInvalid() {
		return readProperty("suvidha.house.no.invalid");
	}

	public String suvidhaAddress1Required() {
		return readProperty("suvidha.address1.required");
	}

	public String suvidhaAddress1Invalid() {
		return readProperty("suvidha.address1.invalid");
	}

	public String suvidhaAddress2Invalid() {
		return readProperty("suvidha.address2.invalid");
	}

	public String suvidhaAddress3Invalid() {
		return readProperty("suvidha.address3.invalid");
	}

	public String suvidhaPincodeRequired() {
		return readProperty("suvidha.pincode.required");
	}

	public String suvidhaPincodeInvalid() {
		return readProperty("suvidha.pincode.invalid");
	}

	public String suvidhaTownCodeRequired() {
		return readProperty("suvidha.town.code.required");
	}

	public String suvidhaCityCodeRequired() {
		return readProperty("suvidha.city.code.required");
	}

	public String suvidhaStateCodeRequired() {
		return readProperty("suvidha.state.code.required");
	}

	public String suvidhaCategoryRequired() {
		return readProperty("suvidha.category.required");
	}

	public String suvidhaNoOfMembersRequired() {
		return readProperty("suvidha.no.of.members.required");
	}

	public String suvidhaBurglaryOtherSumInsuredRequired() {
		return readProperty("suvidha.burglary.other.suminsured.required");
	}

	public String suvidhaFireAlliedPerilSumInsuredRequired() {
		return readProperty("suvidha.fire.allied.peril.suminsured.required");
	}

	public String suvidhaMoneySumInsuredRequired() {
		return readProperty("suvidha.money.suminsured.required");
	}

	public String suvidhaPersonalAccidentSumInsuredRequired() {
		return readProperty("suvidha.personal.accident.suminsured.required");
	}

	public String suvidhaFidelitySumInsuredRequired() {
		return readProperty("suvidha.fidelity.suminsured.required");
	}

	public String suvidhaElectronicSumInsuredRequired() {
		return readProperty("suvidha.electronic.suminsured.required");
	}

	public String suvidhaSumInsuredMin() {
		return readProperty("suvidha.suminsured.min");
	}

	public String suvidhaSumInsuredMax() {
		return readProperty("suvidha.suminsured.max");
	}

	public String suvidhaElectronicCoverageRequired() {
		return readProperty("suvidha.electronic.coverage.required");
	}

	public String suvidhaNomineeNameRequired() {
		return readProperty("suvidha.nominee.name.required");
	}

	public String suvidhaNomineeNameInvalid() {
		return readProperty("suvidha.nominee.name.invalid");
	}

	public String suvidhaRelationshipRequired() {
		return readProperty("suvidha.relationship.required");
	}

	public String suvidhaNomineeRelationshipRequired() {
		return readProperty("suvidha.nominee.relationship.required");
	}

	public String suvidhaAgeRequired() {
		return readProperty("suvidha.age.required");
	}

	public String suvidhaAgeInvalid() {
		return readProperty("suvidha.age.invalid");
	}

	public String suvidhaSumInsuredRequired() {
		return readProperty("suvidha.sum.insured.required");
	}

	public String suvidhaSumInsuredInvalid() {
		return readProperty("suvidha.sum.insured.invalid");
	}

	public String suvidhaSelfMemberRequired() {
		return readProperty("suvidha.self.member.required");
	}

	public String suvidhaFireContentSumInsuredRequired() {
		return readProperty("suvidha.fire.content.suminsured.required");
	}

	public String suvidhaTelevisionVideoSumInsuredRequired() {
		return readProperty("suvidha.television.video.suminsured.required");
	}

	public String suvidhaPersonalComputerCoverageRequired() {
		return readProperty("suvidha.personal.computer.coverage.required");
	}

	public String suvidhaFireBuildingSumInsuredRequired() {
		return readProperty("suvidha.fire.building.suminsured.required");
	}

	public String suvidhaPersonalComputerSumInsuredRequired() {
		return readProperty("suvidha.personal.computer.suminsured.required");
	}

	public String makeMasterError() {
		return readProperty("make.master.error");
	}

	// CRB and CKI
	public String policyDurationRequired() {
		return readProperty("policy.duration.required");
	}

	public String healthMemberRequired() {
		return readProperty("health.member.required");
	}

	public String healthCRBInvalidAge() {
		return readProperty("health.crb.invalid.age");
	}

	public String healthCRBInvalidAdultMemberCount() {
		return readProperty("health.crb.invalid.adult.member.count");
	}

	public String healthCKFMinimumMemberRequired() {
		return readProperty("health.crf.minimum.member.required");
	}

	public String healthMaximumMemberLimit() {
		return readProperty("health.maximum.member.limit");
	}

	public String healthCKIAdultInvalidAge() {
		return readProperty("health.cki.adult.invalid.age");
	}

	public String healthCKIChildInvalidAge() {
		return readProperty("health.cki.child.invalid.age");
	}

	public String healthHDCChildInvalidAge() {
		return readProperty("health.hdc.child.invalid.age");
	}

	public String healthCKIOccupationMemberRequired() {
		return readProperty("health.cki.occupation.member.required");
	}

	public String healthCKIHealthWorkerDiscountInvalid() {
		return readProperty("health.cki.health.workerdiscount.invalid");
	}

	public String keralaResidenceRequired() {
		return readProperty("keralaResidence.required");
	}

	public String invalidOTP() {
		return readProperty("otp.invalid");
	}

	public String healthRenewNameMissmatch() {
		return readProperty("health.policy.renewal.details.mismatch");
	}

	public String policyDownloadDataMismatch() {
		return readProperty("health.policy.download.data.mismatch");
	}

	public String employeeNoRequired() {
		return readProperty("health.policy.download.employee.no.required");
	}

	public String userDuplicateEmailRegistered() {
		return readProperty("user.already.registered.email.mobile");
	}

	public String healthChildRelationshipInvalid() {
		return readProperty("health.child.relationship.invalid");
	}

	public String healthAdultRelationshipInvalid() {
		return readProperty("health.adult.relationship.invalid");
	}

	public String healthIffcoTokioPolicyNoRequired() {
		return readProperty("health.iffcotokio.policy.required");
	}

	public String healthIffcoTokioPolicyNoInvalid() {
		return readProperty("health.iffcotokio.policy.invalid");
	}

	public String healthExistingEmployeeRequired() {
		return readProperty("health.existing.employee.required");
	}

	public String healthExistingEmployeeInvalid() {
		return readProperty("health.existing.employee.invalid");
	}

	public String healthGroupMediclaimPolicyInvalid() {
		return readProperty("health.group.mediclaim.policy.invalid");
	}

	public String healthRoomRentWaiverApplicable() {
		return readProperty("health.roomrentwaiver.applicable.invalid");
	}

	public String policyPeriodInvalid() {
		return readProperty("policy.period.invalid");
	}

	public String healthGroupMediclaimPolicyRequired() {
		return readProperty("health.group.mediclaim.policy.required");
	}

	public String healthMultipleRelationship() {
		return readProperty("health.multiple.relationship");
	}

	public String healthLoyaltyProposerNameInvalid() {
		return readProperty("health.loyalty.proposer.name.invalid");
	}

	public String healthAnyOtherMedicalHealthConditionError() {
		return readProperty("health.other.medical.condition.disease");
	}

	public String healthRenewalPedError() {
		return readProperty("health.renewal.ped.error");
	}

	public String healthHypertesnsionError() {
		return readProperty("health.hypertension.error");
	}

	public String healthHypertesnsionMaxAgeError() {
		return readProperty("health.hypertension.max.age.error");
	}

	public String healthThyroidDisorderError() {
		return readProperty("health.thyroid.disorder.error");
	}

	public String healthDiabetesError() {
		return readProperty("health.diabetes.error");
	}

	public String healthDiabetesMaxAgeError() {
		return readProperty("health.diabetes.max.age.error");
	}

	public String healthDiabetesInsulinError() {
		return readProperty("health.diabetes.insulin.error");
	}

	public String healthAgeRelationshipInvalid() {
		return readProperty("health.age.relationship.invalid");
	}

	public String motorRestrictedVehicleRegNo() {
		return readProperty("motor.restricted.vehicle.error");
	}

	public String patnerSourceRequired() {
		return readProperty("motor.patner.source.required");
	}

	public String driverNameRequired() {
		return readProperty("claim.intimation.driver.name.required");
	}

	public String driverNameInvalid() {
		return readProperty("claim.intimation.driver.name.invalid");
	}

	public String driverNumberInvalid() {
		return readProperty("claim.intimation.driving.license.required");
	}

	public String lossDescRequired() {
		return readProperty("claim.intimation.loss.description.required");
	}

	public String lossDecInvalid() {
		return readProperty("claim.intimation.loss.description.invalid");
	}

	public String lossDateRequired() {
		return readProperty("claim.intimation.loss.date.required");
	}

	public String lossHourRequired() {
		return readProperty("claim.intimation.loss.hour.required");
	}

	public String lossMinRequired() {
		return readProperty("claim.intimation.loss.minute.required");
	}

	public String tpLossRequired() {
		return readProperty("claim.intimation.tp.loss.required");
	}

	public String geographicsRequired() {
		return readProperty("claim.intimation.geographics.required");
	}

	public String firRequired() {
		return readProperty("claim.intimantion.fir.required");
	}

	public String firNoRequired() {
		return readProperty("claim.initimation.fir.number.required");
	}

	public String ruralAgeInvalid() {
		return readProperty("rural.age.invalid");
	}

	public String ruralMaritalStatusRequired() {
		return readProperty("rural.marital.required");
	}

	public String ruralSpouseNameRequired() {
		return readProperty("rural.spouse.required");
	}

	public String ruralFatherNameRequired() {
		return readProperty("rural.father.required");
	}

	public String ruralFatherNameInvalid() {
		return readProperty("rural.father.invalid");
	}

	public String ruralFatherNameMaxLength() {
		return readProperty("rural.father.max.length");
	}

	public String ruralNomineeNameRequired() {
		return readProperty("rural.nominee.required");
	}

	public String ruralNomineeNameMaxLength() {
		return readProperty("rural.nominee.max.length");
	}

	public String ruralIdentityCodeRequired() {
		return readProperty("rural.idCode.required");
	}

	public String ruralIdentityCodeNumberRequired() {
		return readProperty("rural.idNumber.required");
	}

	public String fatherNameInvalid() {
		return readProperty("rural.fathername.invalid");
	}

	public String nomineenameInvalid() {
		return readProperty("rural.nomineename.invalid");
	}

	public String ruralPremiumPlanRequired() {
		return readProperty("rural.premiumplan.required");
	}

	public String jkbChildrenAgeInvalid() {
		return readProperty("jkb.child.age.invalid");
	}

	public String jkbChildrenNameRequired() {
		return readProperty("jkb.child.name.required");
	}

	public String jkbChildrenNameInvalid() {
		return readProperty("jkb.child.name.Invalid");
	}

	public String paInsuredNameRequired() {
		return readProperty("paInsured.name.required");
	}

	public String paInsuredNameInvalid() {
		return readProperty("paInsured.name.invalid");
	}

	public String paInsuredNameMaxlength() {
		return readProperty("paInsured.name.maxlength");
	}

	public String paInsuredDateOfBirthRequired() {
		return readProperty("paInsured.dateofbirth.required");
	}

	public String paInsuredDateOfBirthInvalid() {
		return readProperty("paInsured.dateofbirth.invalid");
	}

	public String paInsuredDateOfBirthRange() {
		return readProperty("paInsured.dateofbirth.range");
	}

	public String paInsuredRealtionShipRequired() {
		return readProperty("paInsured.relationship.required");
	}

	public String dealerNameRequired() {
		return readProperty("samsung.dealername.required");
	}

	public String dealerStateRequired() {
		return readProperty("samsung.dealerstate.required");
	}

	public String dealerCityRequired() {
		return readProperty("samsung.dealercity.required");
	}

	public String dealerAddressRequired() {
		return readProperty("samsung.dealeraddress.required");
	}

	public String productTypeRequired() {
		return readProperty("samsung.producttype.required");
	}

	public String sNoRequired() {
		return readProperty("samsung.sno.required");
	}

	public String invoiceNoRequired() {
		return readProperty("samsung.invocieno.required");
	}

	public String invoiceDateRequired() {
		return readProperty("samsung.invoicedate.required");
	}

	public String invoiceDateInvalid() {
		return readProperty("samsung.invoicedate.invalid");
	}

	public String amountRequired() {
		return readProperty("samsung.amount.required");
	}

	public String productAlreadyRegistered() {
		return readProperty("samsung.productalready.registered");
	}

	public String samsungRegistrationNotAllowed() {
		return readProperty("samsung.registration.notallowed");
	}

	public String periodOver() {
		return readProperty("samsung.period.over");
	}

	public String samsungRegistrationFailed() {
		return readProperty("samsung.registration.failed");
	}

	public String searchByRequired() {
		return readProperty("searchby.required");
	}

	public String searchNoRequired() {
		return readProperty("searchno.required");
	}

	public String claimNotFound() {
		return readProperty("claim.notfound");
	}

	public String itgiRefNoRequired() {
		return readProperty("itgiRefNo.required");
	}

	public String partnerNoRequired() {
		return readProperty("patnerNo.required");
	}

	public String premiumPayableRequired() {
		return readProperty("premiumPayable.required");
	}

	public String traceNoRequired() {
		return readProperty("traceNo.required");
	}

	public String orderNoInvalid() {
		return readProperty("orderNo.required");
	}

	public String authorizationCodeInvalid() {
		return readProperty("authorizationCode.required");
	}

	public String authStatus() {
		return readProperty("authStatus.required");
	}

	public String partnerName() {
		return readProperty("partnerName.required");
	}

	public String paymentLinkNotFound() {
		return readProperty("payment.link.not.found");
	}

	public String paymentLinkExpired() {
		return readProperty("payment.link.expired");
	}

	public String paymentLinkPremiumMissmatch() {
		return readProperty("payment.link.premium.missmatch");
	}

	public String paymentAlreadyRecieved() {
		return readProperty("payment.link.payment.received");
	}

	public String EWIdateOfPurchaseRequired() {
		return readProperty("ewi.dateOfPurchase.required");
	}

	public String EWIitemNameRequired() {
		return readProperty("ewi.itemname.required");
	}

	public String EWIcheckDisclaimer() {
		return readProperty("ewi.disclaimer.required");
	}

	public String EWIManufacturerWarrantyRequired() {
		return readProperty("ewi.manufacturerwarranty.required");
	}

	public String EWIWarrantyPeriodRequired() {
		return readProperty("ewi.warrantyperiod.required");
	}

	public String EWImakeModelRequired() {
		return readProperty("ewi.makemodel.required");
	}

	public String EWIUINRequired() {
		return readProperty("ewi.uin.required");
	}

	public String EWIserviceProvidersNameRequired() {
		return readProperty("ewi.serviceProvidersName.required");
	}

	public String EWIserviceProvidersAddressRequired() {
		return readProperty("ewi.serviceProvidersAddress.required");
	}

	public String EWIpurchaseAmountRequired() {
		return readProperty("ewi.purchaseAmount.required");
	}

	public String EWIpolicyNumberRequired() {
		return readProperty("ewi.policyNumber.required");
	}

	public String EWIpolicyTypeRequired() {
		return readProperty("ewi.policyType.required");
	}

	public String EWIdateOfPurchaseInvalid() {
		return readProperty("ewi.dateOfPurchase.invalid");
	}

	public String EWIpurchaseAmountInvalid() {
		return readProperty("ewi.purchaseAmount.invalid");
	}

	public String cviGvwLimit() {
		return readProperty("cvi.gvw.limit");
	}

	public String cviElectricalAccessoriesValueRequired() {
		return readProperty("cvi.electrical.accessories.value.required");
	}

	public String cviElectricalAccessoriesValueInvalid() {
		return readProperty("cvi.electrical.accessories.value.invalid");
	}

	public String cviCngLpgValueRequired() {
		return readProperty("cvi.cng.lpg.value.required");
	}

	public String cviCngLpgValueInvalid() {
		return readProperty("cvi.cng.lpg.value.invalid");
	}

	public String cviPaTotalPassengerRequired() {
		return readProperty("cvi.pa.total.passenger.required");
	}

	public String cviPaTotalPassangerInvalid() {
		return readProperty("cvi.pa.total.passanger.invalid");
	}

	public String cviPaSumInsuredRequired() {
		return readProperty("cvi.pa.sum.insured.required");
	}

	public String cviNonFarepaxTotalPassangerRequired() {
		return readProperty("cvi.non.farepax.total.passanger.required");
	}

	public String cviNonFarepaxTotalPassangerInvalid() {
		return readProperty("cvi.non.farepax.total.passanger.invalid");
	}

	public String cviImt43TotalPassangerRequired() {
		return readProperty("cvi.imt43.total.passanger.required");
	}

	public String cviImt43TotalPassangerInvalid() {
		return readProperty("cvi.imt43.total.passanger.invalid");
	}

	public String cviLlPaidDriverTotalPassangerRequired() {
		return readProperty("cvi.ll.paid.driver.total.passanger.required");
	}

	public String cviLlPaidDriverTotalPassangerInvalid() {
		return readProperty("cvi.ll.paid.driver.total.passanger.invalid");
	}

	public String policyInvalid() {
		return readProperty("policy.invalid");
	}

	public String challanDateRequired() {
		return readProperty("challan.date.required");
	}

	public String noDataFoundForItgiRef() {
		return readProperty("noData.found.itgiRef");
	}

	public String amountNotReceivedForItgiRef() {
		return readProperty("amount.notReceived.itgiRef");
	}

	public String healthHPPWodDetailsInvalid() {
		return readProperty("health.hpp.Wod.Details.invalid");
	}

	public String healthHPPDateOfJoiningRequired() {
		return readProperty("health.hpp.dateofjoining.required");
	}

	public String healthHPPEmployerNameRequired() {
		return readProperty("health.hpp.employer.name.required");
	}

	public String healthHPPEmployerAddressRequired() {
		return readProperty("health.hpp.employer.address.required");
	}

	public String healthHPPEmployeeDesignationRequired() {
		return readProperty("health.hpp.employee.designation.required");
	}

	public String healthHPPInvalidDateOfJoining() {
		return readProperty("health.hpp.employee.dateofjoining.invalid");
	}

	public String healthHPPBMIExcessError() {
		return readProperty("health.hpp.bmi.excess.error");
	}

	public String bankTransactionIdRequired() {
		return readProperty("bank.transactionId.required");
	}

	public String bankTransactionDateRequired() {
		return readProperty("bank.transactionDate.required");
	}

	public String patnerSourceInvalid() {
		return readProperty("partner.source.invalid");
	}

	public String userDoesnotExitsError() {
		return readProperty("user.dosenot.exits");
	}

	public String refCodeRequired() {
		return readProperty("ref.code.required");
	}

	public String AccountNoInvalid() {
		return readProperty("accountno.invalid");
	}

	public String callerRequired() {
		return readProperty("disposition.caller.required");
	}

	public String callerInvalid() {
		return readProperty("disposition.caller.invalid");
	}

	public String levelRequired() {
		return readProperty("disposition.level.required");
	}

	public String levelInvalid() {
		return readProperty("disposition.level.invalid");
	}

	public String remarksInvalid() {
		return readProperty("disposition.remarks.invalid");
	}

	public String newBusinessRequired() {
		return readProperty("disposition.newbusiness.required");
	}

	public String newBusinessInvalid() {
		return readProperty("disposition.newbusiness.invalid");
	}

	public String callBackRequired() {
		return readProperty("disposition.callBack.required");
	}

	public String callBackInvalid() {
		return readProperty("disposition.callBack.invalid");
	}

	public String callBackDateRequired() {
		return readProperty("disposition.callBack.date.required");
	}

	public String callBackDateInvalid() {
		return readProperty("disposition.callBack.date.invalid");
	}

	public String callBackTimeRequired() {
		return readProperty("disposition.callBack.time.required");
	}

	public String callBackTimeInvalid() {
		return readProperty("disposition.callBack.time.invalid");
	}

	public String productRequired() {
		return readProperty("disposition.product.required");
	}

	public String productInvalid() {
		return readProperty("disposition.product.invalid");
	}

	public String callCenterRequired() {
		return readProperty("disposition.cc.required");
	}

	public String callCenterInvalid() {
		return readProperty("disposition.cc.invalid");
	}

	public String posAgenntIdRequired() {
		return readProperty("disposition.agentId.required");
	}

	public String vehicleSubClassMismatch() {
		return readProperty("vehicle.subclass.mismatch");
	}

	public String refCodeInvalid() {
		return readProperty("ref.code.invalid");
	}

	public String breakinInspectionRequestExist() {
		return readProperty("breakin.inspection.request.exist");
	}

	public String discountNotApplicable() {
		return readProperty("discount.notapplicable.message");
	}

	public String yearOfMakeMaxAgeInvalid() {
		return readProperty("year-of-make.max.age.invalid");
	}

	public String healthRenewalClaimError() {
		return readProperty("health.renewal.claim.error");
	}

	public String terminalStatusRequired() {
		return readProperty("disposition.terminal.status.required");
	}

	public String insuredPanNumberDetailsMismatch() {
		return readProperty("insured.pan.details.mismatch");
	}

	public String userPolicyAlreadyRegistered() {
		return readProperty("user.policy.already.registered");
	}

	public String policyNotAllowed() {
		return readProperty("policy.not.allowed");
	}

	public String ckycDocumentRequired() {
		return readProperty("ckyc.document.required");
	}

	public String ckycDocumentTypeRequired() {
		return readProperty("ckyc.document-type.required");
	}

	public String ckycDocumentTypeInvalid() {
		return readProperty("ckyc.document-type.invalid");
	}

	public String ckycDocumentNameRequired() {
		return readProperty("ckyc.document-name.required");
	}

	public String ckycDocumentNumberRequired() {
		return readProperty("ckyc.document-number.required");
	}

	public String ckycDocumentFileRequired() {
		return readProperty("ckyc.document-file.required");
	}

	public String ckycDocumentFileExtensionInvalid() {
		return readProperty("ckyc.document-file-extension.invalid");
	}

	public String ckycDocumentFileSizeInvalid() {
		return readProperty("ckyc.document-file-size.invalid");
	}

	public String ckycRecordNotFound() {
		return readProperty("ckyc.record.not-found");
	}

	public String ckycDetailsMismatch() {
		return readProperty("ckyc.details.mis-match");
	}

	public String paymentQuotePremiumMismatch() {
		return readProperty("payment.quote.premium.mismtach");
	}

	public String abhaNumberError() {
		return readProperty("abhanumber.invalid");
	}

	public String redirectionRequestpolicyProfileErrorMessage() {
		return readProperty("redirection.request.policy.profile.error.message");
	}

	public String redirectionRequestRedirectErrorMessage() {
		return readProperty("redirection.request.redirect.error.message");
	}

	public String redirectionRequestContractTypeErrorMessage() {
		return readProperty("redirection.request.contract.type.error.message");
	}

	public String marineRiskRequired() {
		return readProperty("marine.risk.required");
	}

	public String commodityListRequired() {
		return readProperty("commodity.list.required");
	}

	public String contractTypeRequired() {
		return readProperty("contract.type.required");
	}

	public String insuranceTypeRequired() {
		return readProperty("insurance.type.required");
	}

	public String riskTypeRequired() {
		return readProperty("risk.type.required");
	}

	public String riskTypeInvalid() {
		return readProperty("Risk Type is invalid");
	}

	public String policyTypeRequired() {
		return readProperty("policy.type.required");
	}

	public String modeOfTransitRequired() {
		return readProperty("transit.mode.required");
	}

	public String commodityCodeAndModeOfTransitRequired() {
		return readProperty("commodity.code.mode.of.transit.required");
	}

	public String termOfSaleRequired() {
		return readProperty("term.of.sale.required");
	}

	public String termOfSaleInvalid() {
		return readProperty("term.of.sale.invalid");
	}

	public String modeOfTransitInvalid() {
		return readProperty("transit.mode.invalid");
	}

	public String listBlank() {
		return readProperty("list.blank");
	}

	public String policyTypeInvalid() {
		return readProperty("policy.type.invalid");
	}

	public String natureOfPackingRequired() {
		return readProperty("packing.nature.required");
	}

	public String natureOfPackingInvalid() {
		return readProperty("packing.nature.invalid");
	}

	public String commodityCodeRequired() {
		return readProperty("commodity.code.required");
	}

	public String commodityCodeInvalid() {
		return readProperty("commodity.code.invalid");
	}

	public String commodityTypeRequired() {
		return readProperty("commodity.type.required");
	}

	public String commodityTypeInvalid() {
		return readProperty("commodity.type.invalid");
	}

	public String cargoValueRequired() {
		return readProperty("commodity.cargo.value.required");
	}

	public String cargoValueLimitExceed() {
		return readProperty("commodity.cargo.value.limit.exceed");
	}

	public String commodityDescriptionInvalid() {
		return readProperty("commodity.description.invalid");
	}

	public String voyageDetailsRequired() {
		return readProperty("voyage.details.required");
	}

	public String invalidBillType() {
		return readProperty("invalid.bill.type");
	}

	public String billTypeRequired() {
		return readProperty("bill.type.required");
	}

	public String billNumberRequired() {
		return readProperty("bill.number.required");
	}

	public String billingDateRequired() {
		return readProperty("billing.date.required");
	}

	public String billDateMaxFutureDateElapsed() {
		return readProperty("bill.date.max.future.date.elapsed");
	}

	public String billDateBackdated() {
		return readProperty("bill.date.backdated");
	}

	public String markUpPercentage() {
		return readProperty("markup.percentage.required");
	}

	public String markUpPercentageInvalid() {
		return readProperty("markup.percentage.invalid");
	}

	public String costRequired() {
		return readProperty("commodity.cost.required");
	}

	public String costRequiredTrue() {
		return readProperty("commodity.cost.required.true");
	}

	public String clausesRequired() {
		return readProperty("commodity.clause.required");
	}

	public String clausesInvalid() {
		return readProperty("commodity.clause.invalid");
	}

	public String commodityDetailsInvalid() {
		return readProperty("commodity.details.invalid");
	}

	public String countryIndiaRequired() {
		return readProperty("country.india.required");
	}

	public String stpDataRequired() {
		return readProperty("stp.data.required");
	}

	public String opsDataRequired() {
		return readProperty("ops.data.required");
	}

	public String occupancyCodeInvalid() {
		return readProperty("occupancy.code.invalid");
	}

	public String occupancyCodeRequired() {
		return readProperty("occupancy.code.required");
	}

	public String occupancyNameInvalid() {
		return readProperty("occupancy.name.invalid");
	}

	public String occupancyNameRequired() {
		return readProperty("occupancy.name.required");
	}

	public String propertyDescriptionInvalid() {
		return readProperty("property.description.invalid");
	}

	public String propertyDescriptionRequired() {
		return readProperty("property.description.required");
	}

	public String planNameInvalid() {
		return readProperty("plan.name.invalid");
	}

	public String planNameRequired() {
		return readProperty("plan.name.required");
	}

	public String furnitureSumInsuredInvalid() {
		return readProperty("furniture.sum.insured.invalid");
	}

	public String furnitureSumInsuredRequired() {
		return readProperty("furniture.sum.insured.required");
	}

	public String otherSumInsuredInvalid() {
		return readProperty("other.sum.insured.invalid");
	}

	public String otherSumInsuredRequired() {
		return readProperty("other.sum.insured.required");
	}

	public String tradeSumInsuredInvalid() {
		return readProperty("trade.sum.insured.invalid");
	}

	public String tradeSumInsuredRequired() {
		return readProperty("trade.sum.insured.required");
	}

	public String sumInsuredZero() {
		return readProperty("sum.insured.zero");
	}

	public String sumInsuredMismatch() {
		return readProperty("sum.insured.mismatch");
	}

	public String userNotRegistered() {
		return readProperty("user.not.registered");
	}

	public String insuredAddress1Invalid() {
		return readProperty("insured.address1.invalid");
	}

	public String insuredAddress1Required() {
		return readProperty("insured.address1.required");
	}

	public String insuredAddress2Invalid() {
		return readProperty("insured.address2.invalid");
	}

	public String insuredAddress2Required() {
		return readProperty("insured.address2.required");
	}

	public String insuredPincodeInvalid() {
		return readProperty("insured.pincode.invalid");
	}

	public String insuredPincodeRequired() {
		return readProperty("insured.pincode.required");
	}

	public String insuredLocalityCodeInvalid() {
		return readProperty("insured.locality.code.invalid");
	}

	public String insuredLocalityCodeRequired() {
		return readProperty("insured.locality.code.required");
	}

	public String insuredLocalityNameInvalid() {
		return readProperty("insured.locality.name.invalid");
	}

	public String insuredLocalityNameRequired() {
		return readProperty("insured.locality.name.required");
	}

	public String insuredCityCodeInvalid() {
		return readProperty("insured.city.code.invalid");
	}

	public String insuredCityCodeRequired() {
		return readProperty("insured.city.code.required");
	}

	public String insuredCityNameInvalid() {
		return readProperty("insured.city.name.invalid");
	}

	public String insuredCityNameRequired() {
		return readProperty("insured.city.name.required");
	}

	public String insuredStateCodeInvalid() {
		return readProperty("insured.state.code.invalid");
	}

	public String insuredStateCodeRequired() {
		return readProperty("insured.state.code.required");
	}

	public String insuredStateNameInvalid() {
		return readProperty("insured.state.name.invalid");
	}

	public String insuredStateNameRequired() {
		return readProperty("insured.state.name.required");
	}

	public String nomineeNameInvalid() {
		return readProperty("nominee.name.invalid");
	}

	public String nomineeNameRequired() {
		return readProperty("nominee.name.required");
	}

	public String nomineeRelationshipInvalid() {
		return readProperty("nominee.relationship.invalid");
	}

	public String nomineeRelationshipRequired() {
		return readProperty("nominee.relationship.required");
	}

	public String policyInceptionDateInvalid() {
		return readProperty("policy.inception.date.invalid");
	}

	public String policyInceptionDateRequired() {
		return readProperty("policy.inception.date.required");
	}

	public String policyExpirationDateInvalid() {
		return readProperty("policy.expiration.date.invalid");
	}

	public String policyExpirationDateRequired() {
		return readProperty("policy.expiration.date.required");
	}

	public String hypothecationRequired() {
		return readProperty("hypothecation.required");
	}


}
