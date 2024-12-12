class minHeap
{
    constructor()
    {
        this.array = [];
    }

    getLength()
    {
        return this.array.length;
    }

    insert(value)
    {
        this.array.push(value);
        this.percolateUp();
    }

    percolateUp()
    {
        let currentIndex = this.getLength() - 1;

        while (currentIndex > 0)
        {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.array[currentIndex] < this.array[parentIndex])
            {
                [this.array[currentIndex], this.array[parentIndex]] = [this.array[parentIndex], this.array[currentIndex]];

                currentIndex = parentIndex;
            }
            else
            {
                break;
            }
        }
    }

    peek()
    {
        return this.array[0];
    }

    delete()
    {
        let temp = this.array[0];
        if (this.getLength() > 1)
        {
            this.array[0] = this.array.pop();
        } else {
            this.array.pop();
        }
        this.percolateDown();
        return temp;
    }

    percolateDown()
    {
        let currentIndex = 0;
        let length = this.getLength();

        while (true)
        {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let smallestIndex = currentIndex;

            // Check left child
            if (leftChildIndex < length && this.array[leftChildIndex] < this.array[smallestIndex])
            {
                smallestIndex = leftChildIndex;
            }

            // Check right child
            if (rightChildIndex < length && this.array[rightChildIndex] < this.array[smallestIndex])
            {
                smallestIndex = rightChildIndex;
            }

            // If the smallest is not the current, swap and continue
            if (smallestIndex !== currentIndex)
            {
                [this.array[currentIndex], this.array[smallestIndex]] =
                    [this.array[smallestIndex], this.array[currentIndex]];
                currentIndex = smallestIndex; // Move down the tree
            } else
            {
                break; // Heap property satisfied
            }
        }
    }

    print()
    {
        console.log(this.array);
    }
}

// Example usage
let min = new minHeap();
let arr = [10];
for (const value of arr)
{
    min.insert(value);
}
min.print(); // Output the heap

console.log("Peek:", min.peek()); // Smallest element
console.log("Deleted:", min.delete()); // Remove the smallest element
min.print(); // Output the heap after deletion
console.log("-------------------------------------------");
