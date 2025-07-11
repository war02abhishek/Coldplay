package com.itgi.claim;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

@Component
public class CorsFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;

		String origin = req.getHeader("Origin");
		if (ObjectUtils.isEmpty(origin)) {
			origin = "*";
		}
		res.setHeader("Access-Control-Allow-Origin", origin);
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS");
		res.setHeader("Access-Control-Max-Age", "3600");
		res.addHeader("Access-Control-Expose-Headers", "Jwt-Token, xsrf-token");
		res.setHeader("Access-Control-Allow-Headers",
				"Content-Type,Accept,X-Requested-With,remember-me,Origin,Jwt-Token,Authorization,client-security-token,X-CSRF-TOKEN,X-API-Key,X-ITGI-Referer,append,delete,entries,foreach,get,has,keys,set,values");
		if ("OPTIONS".equals(req.getMethod())) {
			res.setStatus(HttpServletResponse.SC_OK);
		} else {
			chain.doFilter(req, res);
		}
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// EMPTY
 	}

	@Override
	public void destroy() {
		// EMPTY
	}

}
