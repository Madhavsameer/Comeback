import java.util.Scanner;

public class striing {
    public static void main(String[] args) {
        reverse();
        
    }

    public static void reverse(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Srring You want to be reveresed ");
        String str=sc.next();
        String reversed="";
        for(int i=str.length()-1; i>=0; i--){
            reversed+=str.charAt(i);
        }
        System.out.println("String after REversing is "+reversed);

    }
}
