package javaday2;

public class LocalVariable {
	   public void sheet() {
	      int count = 0;
	    count = count + 7;
	      System.out.println("Sheet count number is : " + count);
	   }

	   public static void main(String args[]) {
		   LocalVariable quantity = new LocalVariable();
	      quantity.sheet();
	   }
	}
