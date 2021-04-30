package scores.services;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Solution {
    private static long mcd(long numa, long numb){

        long mcd = 0;
        long a = Math.max(numa,numb);
        long b = Math.min(numa,numb);
        do{
            mcd=b;
            b=a%b;
            a=mcd;
        }while(b!=0);
        return mcd;
    }
    private static long mcm(long numa, long numb){
        long result = 0;
        long a = Math.max(numa,numb);
        long b = Math.min(numa,numb);
        result=( a/mcd(a,b))*b;
        return result;

    }
    private static long mcm(long[] machines){
        long result=1;
        for(long machine:machines){
            result=mcm(result, machine);
        }
        return result;
    }
    private static long totalProducedByMachineIn(long machine, long days) {
        return days / machine;
    }

    private static long totalProducedIn(long[] machines, long days) {
        long totalMid = 0;
        for (long machine : machines) {
            totalMid += totalProducedByMachineIn(machine, days);
        }
        return totalMid;
    }

    static void incr(Map<Integer, Integer> days, int i){
        if(days.containsKey(i)){
            days.put(i, days.get(i) + 1);
        }else{
            days.put(i, 1);
        }
    }
    static Integer get(Map<Integer, Integer> days, int i){
        if(days.containsKey(i)){
           return days.get(i);
        }
        return 0;
    }
    static long minTime(long[] machines, long goal) {

        Arrays.sort(machines);
        long mcm= mcm(machines);
        long maxDays = machines[machines.length - 1] * goal;
        Map<Integer, Integer> increaseByDays= new HashMap();
        for (long machine : machines) {
            int i = (int) machine;
            while (i < maxDays) {
                if(i<mcm){
                    incr(increaseByDays, i);
                }else if(i==mcm){
                    incr(increaseByDays, 0);
                }
                i += machine;
            }
        }
        long sum2 = 0;
        for (int i = 1; i < maxDays; i++) {
            int idx = i%(int)mcm;
            sum2 += get(increaseByDays, i) ;
            System.out.println( "get(increaseByDays, "+i+") " + get(increaseByDays, i)+ " sum2 " + sum2);
            if (sum2 >= goal) {
                return i;
            }
        }
        return 0;
    }



    static long minTime3(long[] machines, long goal) {
        //Try the binary search arproach.
        Arrays.sort(machines);
        long maxDays = machines[machines.length - 1] * goal;
        long minDays = 0;
        long result = -1L;
        while (minDays < maxDays) {
            long mid = (maxDays + minDays) / 2;
            long total = totalProducedIn(machines, mid);
            if (total < goal) {
                minDays = mid + 1;
            } else {
                result = mid;
                maxDays = mid;
            }
        }
        return result;
    }

    static long minTime2(long[] machines, long goal) {
        long count = 0;
        long days = 0;
        while (count < goal) {
            days++;
            for (int i = 0; i < machines.length; i++) {
                if (days % machines[i] == 0) {
                    count++;
                }
            }
        }
        return days;
//day  1 2 3 4 5 6
//m0   0 1 1 2 2 3
//m1   0 0 1 1 1 2


    }

    public static void main(String[] args) throws IOException {
        File file = new File("src/test/java/scores/services/testFile.txt");

        Scanner scanner = new Scanner(file, StandardCharsets.UTF_8.name());

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

        System.out.println(ans);
        scanner.close();
    }
}
