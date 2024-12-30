import java.util.ArrayList;
import java.util.Scanner;
public class basics {

    public static void main(String[] args) {
        greet("Madhav");
        sum();
        evenodd(5, 100);
    }

    public static void greet(String name){
        System.out.println("Hello "+name);
    }

    public static void sum(){
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the number up to which you want the sum: ");
        int num=sc.nextInt();
        int result=0;
        for(int i=0; i<=num; i++){
            result+=i;
        }

       System.out.println("The sum of the numbers from 0 to "+num+" is "+result);
    }

    public static void evenodd(int first, int last){
        ArrayList <Integer> even = new ArrayList();
        ArrayList <Integer> odd = new ArrayList();
        for(int i=first; i<=last; i++){
            if(i%2==0){
                even.add(i);
            }
            else{
                odd.add(i);
            }
    }
    System.out.println("Even numbers between this range are "+even);
    System.out.println("odd numbers between this range are "+odd);
}
}