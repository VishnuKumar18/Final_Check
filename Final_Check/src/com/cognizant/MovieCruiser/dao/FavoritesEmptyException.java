/**
 * 
 */
package com.cognizant.MovieCruiser.dao;

/**
 * @author VishnuKumar
 *
 */
public class FavoritesEmptyException extends Exception {
	private String message;

	public FavoritesEmptyException(String message) {
		this.message = message;

	}

	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message
	 *            the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

}
