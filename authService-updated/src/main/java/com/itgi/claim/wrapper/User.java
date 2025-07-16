package com.itgi.claim.wrapper;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.itgi.claim.util.APPConstants;

@JsonInclude(Include.NON_EMPTY)
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7380542102001031952L;
	private String pageName;
	private String mobile;
	private String email;
	private Integer parentUserId;
	private Integer userId;
	private String roleId;
	private String roleName;
	private int privilegeId;
	private String username;
	private String password;
	private String newPassword;
	private String active;
	private String error;
	private Timestamp createdDate;
	private List<Privileges>privileges;
	private String[] allowedPrivileges;


	public String getPageName() {
		return pageName;
	}

	public void setPageName(String pageName) {
		this.pageName = pageName;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getParentUserId() {
		return parentUserId;
	}

	public void setParentUserId(Integer parentUserId) {
		this.parentUserId = parentUserId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public int getPrivilegeId() {
		return privilegeId;
	}

	public void setPrivilegeId(int privilegeId) {
		this.privilegeId = privilegeId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public Timestamp getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}

	public List<Privileges>getPrivilages() {
		return privileges;
	}

	public void setPrivilages(List<Privileges>privilages) {
		this.privileges = privilages;
	}

	public String[] getAllowedPrivileges() {
		return allowedPrivileges;
	}

	public void setAllowedPrivileges(String[] allowedPrivileges) {
		this.allowedPrivileges = allowedPrivileges;
	}

	public boolean isActive() {
		return APPConstants.YES.equalsIgnoreCase(getActive());
	}




}
