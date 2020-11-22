import java.util.Scanner;

public class GetInput {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // System.out.println("Enter a number");
        // int a = scanner.nextInt();
        // System.out.println("value = " + a);

        System.out.println("Enter a character");
        char c = scanner.next().charAt(0);
        System.out.println("value = " + c);

    }
}
