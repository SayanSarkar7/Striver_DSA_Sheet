class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }


    append(data){
        const node=new Node(data);

        if(this.head===null){
            this.head=node;
            return;
        }

        let current=this.head;
        while(current.next!=null){
            current=current.next;
        }
        current.next=node;
    }
    printAll(){
        let current=this.head;
        let output='';
        while(current!==null){
            output+=current.data+' -> ';
            current=current.next;
        }
        output+='null';
        console.log(output);
        
    }
}

const ll=new LinkedList();
ll.append(20)
ll.append(30)
ll.append('sayan')
ll.append('anjali')
ll.printAll()




