
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {
    static class MergedCount{
        public MergedCount(int[] arr, long count){
            this.arr =arr;
            this.count = count;
        }
        int[] arr;
        long count;
    }
    private static MergedCount merge(int[] left,int[] right){
        int i =0;
        int j = 0;
        int m = 0;
        MergedCount result = new MergedCount(new int[left.length + right.length],0);
        while(i<left.length || j<right.length){
            if(i==left.length){
                result.arr[m] = right[j];
                j++;
            }else if(j==right.length){
                result.arr[m] = left[i];
                i++;
            }else{
                if( left[i] <= right[j]){
                    result.arr[m] = left[i];
                    i++;
                }else {
                    result.arr[m] = right[j];
                    j++;
                    result.count += left.length-i;
                }
            }
            m++;
        }
        return result;
    }
    
    private static MergedCount countAndMerge(int[] arr){
        if(arr.length<2){
            return new MergedCount(arr,0l);
        }
        int mididx = arr.length /2;
        
        MergedCount left = countAndMerge(Arrays.copyOfRange(arr, 0, mididx));
        MergedCount right = countAndMerge(Arrays.copyOfRange(arr, mididx, arr.length));
        MergedCount result = merge(left.arr, right.arr);
        return new MergedCount(result.arr, result.count + left.count + right.count);
    }

    // Complete the countInversions function below.
    private static long countInversions(int[] arr) {
        return countAndMerge(arr).count;
        
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int t = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int tItr = 0; tItr < t; tItr++) {
            int n = scanner.nextInt();
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            int[] arr = new int[n];

            String[] arrItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int i = 0; i < n; i++) {
                int arrItem = Integer.parseInt(arrItems[i]);
                arr[i] = arrItem;
            }

            long result = countInversions(arr);

            bufferedWriter.write(String.valueOf(result));
            bufferedWriter.newLine();
        }

        bufferedWriter.close();

        scanner.close();
    }
}
