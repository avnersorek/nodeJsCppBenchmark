int main()
{

}

void BubbleSort()
{
	int array [12] = { 3,4,1,3,5,1,92,2,4124,424,52,12 };	
	int arrLen = (sizeof(array) / sizeof(*array));
	int c,i,t,y;

	for (c = 0; c < 1000000; c++) {
	    for (i = 0; i < arrLen; i++) {
	        for (y = 0; y < arrLen - 1; y++) {
	            if (array[y+1] < array[y]) {
	                t = array[y];
	                array[y] = array[y + 1];
	                array[y + 1] = t;
	            }
	        }
	    }
	}

	return array;
}