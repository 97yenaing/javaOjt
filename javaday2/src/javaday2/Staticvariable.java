package javaday2;

public class Staticvariable {
	int num;
	   static int count; // static variable
	   Staticvariable(int n) {
	      num = n;
	      count ++;
	   }
	   public void show() {
	      System.out.println("The number is: " + num);
	   }
	   public static void main(String args[]) {
		  Staticvariable test1 = new Staticvariable(75);
	      test1.show();
	     Staticvariable test2 = new Staticvariable(90);
	      test2.show();
	      System.out.println("The total objects of a class created are: " + count);
	   }
	}