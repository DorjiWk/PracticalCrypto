import java.security.*;
import java.io.*;
import java.math.BigInteger; 

public class SHA1 { 
	public static String myfullname(String input) 
	{ 
		try {  
			MessageDigest mdd = MessageDigest.getInstance("SHA-1"); 
			byte[] messageDigest = mdd.digest(input.getBytes());  
			BigInteger noss = new BigInteger(1, messageDigest); 
 
			String hashtxt = noss.toString(16); 
			while (hashtxt.length() < 32) { 
				hashtxt = "0" + hashtxt; 
			} 
			return hashtxt; 
		} 
		catch (NoSuchAlgorithmException e) { 
			throw new RuntimeException(e); 
		} 
	}  
	public static void main(String args[]) throws NoSuchAlgorithmException 
	{ 

		System.out.println("Hashvalues for my full name Generated by SHA-1: ");

		String myname = "Dorji Wangchuk"; 
		System.out.println("\n" + myname + " : " + myfullname(myname));
		
		System.out.println("Hashvalues for given data Generated by SHA-1: ");

		String givendata = "Practical Cryptography"; 
		System.out.println("\n" + givendata + " : " + myfullname(givendata));
	} 
} 