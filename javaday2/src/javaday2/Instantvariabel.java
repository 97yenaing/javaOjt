package javaday2;

public class Instantvariabel {
	int num; // instance variable
	Instantvariabel(int n) {
	      num = n;
	   }
	   public void show() {
	      System.out.println("The number is: " + num);
	   }
	   public static void main(String args[]) {
		  Instantvariabel test = new  Instantvariabel(75);
	      test.show();
	   }

}
