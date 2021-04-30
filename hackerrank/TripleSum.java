import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

       static private Integer[] sortDistinct(Integer[] repeatedArr){
            return Arrays.asList(repeatedArr).stream()
                        .sorted(Comparator.reverseOrder())
                        .distinct().toArray(Integer[]::new);
    }

    // Complete the triplets function below.
    static long triplets(Integer[] repeatedArrA, Integer[] repeatedArrB, Integer[] repeatedArrC) {
        Integer[] arrA = sortDistinct(repeatedArrA);
        Integer[] arrB = sortDistinct(repeatedArrB);
        Integer[] arrC = sortDistinct(repeatedArrC);
           
        long count=0;
        
        int a=0;
        int c=0;
        
        for(int b =0;b < arrB.length; b++){
            while(a < arrA.length && arrB[b] < arrA[a]){
                a++;
            } 
            while(c < arrC.length && arrB[b] < arrC[c]){
                c++;
            }
            if(a < arrA.length && c < arrC.length){
                count += ((long)(arrA.length - a)) * ((long)(arrC.length - c));
            }
        }
        
        return count;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] lenaLenbLenc = scanner.nextLine().split(" ");

        int lena = Integer.parseInt(lenaLenbLenc[0]);

        int lenb = Integer.parseInt(lenaLenbLenc[1]);

        int lenc = Integer.parseInt(lenaLenbLenc[2]);

        Integer[] arra = new Integer[lena];

        String[] arraItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < lena; i++) {
            int arraItem = Integer.parseInt(arraItems[i]);
            arra[i] = arraItem;
        }

        Integer[] arrb = new Integer[lenb];

        String[] arrbItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < lenb; i++) {
            int arrbItem = Integer.parseInt(arrbItems[i]);
            arrb[i] = arrbItem;
        }

        Integer[] arrc = new Integer[lenc];

        String[] arrcItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < lenc; i++) {
            int arrcItem = Integer.parseInt(arrcItems[i]);
            arrc[i] = arrcItem;
        }

        long ans = triplets(arra, arrb, arrc);

        bufferedWriter.write(String.valueOf(ans));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
