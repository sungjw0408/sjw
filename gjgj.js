import java.io.File;  // Import the File class
import java.io.FileNotFoundException;  // Import this class to handle errors
import java.util.Scanner; // Import the Scanner class to read text files


public class HW3 {
    public static void main(String[] args) {
        String[] arr1 = new String[0];
        String[] arr2 = new String[0];
        String[] arr3 = new String[0];
        double[] average_data = new double[5];
        try {
            File myObj = new File("C:\\Users\\성진욱\\Desktop\\java_HW3.txt");
            Scanner myReader = new Scanner(myObj);

            String data = myReader.nextLine();
            arr1 = data.toString().split(",");

            if (myReader.hasNextLine()){
                data = myReader.nextLine();
                arr2 = data.toString().split(",");
            }
            if (myReader.hasNextLine()){
                data = myReader.nextLine();
                arr3 = data.toString().split(",");
            }
            myReader.close();

        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        for(int i=0 ; i < arr1.length ; i++) {
            System.out.print(arr1[i]+"       ");
        }
        System.out.println("");
        System.out.print(arr2[0]+"   ");
        for(int i=1 ; i < arr2.length ; i++) {
            System.out.print(arr2[i]+"        ");
        }

        System.out.println("");
        System.out.print(arr3[0]+"   ");
        for(int i=1 ; i < 3 ; i++) {
            System.out.print(arr3[i]+"       ");
        }
        for(int i=3 ; i < arr3.length ; i++) {
            System.out.print(arr3[i]+"        ");
        }

        for(int i=0 ; i<5; i++) {
            average_data[i] = ( Double.parseDouble(arr2[i+1]) + Double.parseDouble(arr3[i + 1]) ) / 2;
        }
        System.out.print("\n평균    ");
        for(int i=0 ; i< average_data.length ; i++){
            System.out.print(average_data[i]+"      ");
        }

    }
}
