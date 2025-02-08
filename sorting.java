public class sorting {
    public static void main(String[] args) {
        int arr[]={5,8,2,3,9};
        bubblesort(arr);
        
    }

    public static void bubblesort(int arr[]){

        System.out.println("Array before sorting is");
    for(int i=0; i<arr.length;i++){
        System.out.print(arr[i]+" ");
    }
        int temp=0;
        for(int i=0; i<arr.length-1; i++){
            for(int j=i; j<arr.length; j++){
                if(arr[i]>arr[j]){
                    temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }


        }
    }
    System.out.println();
    System.out.println("Array after sorting is");
    for(int i=0; i<arr.length;i++){
        System.out.print(arr[i]+" ");
    }
    }}
