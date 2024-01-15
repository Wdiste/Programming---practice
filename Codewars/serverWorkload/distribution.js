function distribute(nodes, workload){
    let arr = [], max = [];
    let next = 0;
    let remaining = workload;

    // initialize array of maximum values per server
    for(u = 0; u < nodes; u++) {
        max.push(0);
    }

    // distribute the amount of work slots per server
    while(remaining > 0){
        for(i = 0; i < nodes; i++){
            if(remaining > 0){
            max[i]++;
            remaining--;
            }
        }
    }

    // assign workloads to servers
    max.forEach((e) => {
        let worklist = [];

        for(k = 0; k < e; k++) {
            worklist.push(next);
            next++;
        }
        arr.push(worklist)
    })

    return arr;

  };

console.log(distribute(4, 5));