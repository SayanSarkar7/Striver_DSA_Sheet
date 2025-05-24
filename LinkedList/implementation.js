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
    prepend(data){
        
        const node=new Node(data);
        if(this.head===null){
            this.head=node;
            return;
        }
        node.next=this.head;
        this.head=node;
        
    }
    delete(data){
        if(this.head===null){
            console.log("There is no element to delete");
            return;
        }
        let current=this.head;
        while( current.next!==null && current.next.data!==data){
            current=current.next;
        }
        current.next=current.next.next;
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
ll.prepend('nilanjana')
ll.printAll()
ll.delete(30);
ll.printAll()




