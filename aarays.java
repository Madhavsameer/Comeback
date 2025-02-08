public class aarays {
    public static void main(String[] args) {
        
        int arr[]={5,8,9,7};
        duplicate(arr);
        
    }

    public static void duplicate(int arr[]){
        for(int i=0; i<arr.length-1; i++){
            for(int j=i+1;j<arr.length; j++){
                if(arr[j]==arr[i]){
                    System.out.println("Duplicate ");
                    return;
                }

            }
        }
        System.out.println("No duplicate elements found");
    }
}
