import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {
    
    private static long totalProducedByMachineIn(long machine, long days){
        return days / machine;
    }
    
    private static long totalProducedIn(long[] machines, long days){
          long totalMid = 0;
            for(long machine:machines){
                totalMid += totalProducedByMachineIn(machine, days);
            }
            return totalMid;
    }
    

     static long minTime(long[] machines, long goal) {
        //Try the binary search arproach. 
        Arrays.sort(machines);
        long maxDays= machines[machines.length - 1] * goal;
        long minDays= 0;
        long result = -1L;
        while(minDays < maxDays){
            long mid = (maxDays + minDays) /2;
            long total = totalProducedIn(machines, mid);
            if(total < goal){
                minDays = mid +1;
            }else{
                result= mid;
                maxDays = mid;
            }
        }
        return result;
    } 
    
    static long minTime2(long[] machines, long goal) {
        long count =0;
        long days =0;
        while(count < goal){
            days++;
            for(int i=0; i<machines.length; i++){
                if(days % machines[i] == 0){
                    count ++;
                }
            }
        }
        return days;
//day  1 2 3 4 5 6
//m0   0 1 1 2 2 3
//m1   0 0 1 1 1 2


    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] nGoal = scanner.nextLine().split(" ");

        int n = Integer.parseInt(nGoal[0]);

        long goal = Long.parseLong(nGoal[1]);

        long[] machines = new long[n];

        String[] machinesItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            long machinesItem = Long.parseLong(machinesItems[i]);
            machines[i] = machinesItem;
        }

        long ans = minTime(machines, goal);

        bufferedWriter.write(String.valueOf(ans));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
