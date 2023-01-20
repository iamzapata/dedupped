{
  const list = [{
      name: 'John'
    },
    {
      name: 'Sara'
    },
    {
      name: 'Sara'
    },
    {
      name: 'Lynn'
    },
    {
      name: 'Jake'
    }
  ];

 const map = new Map()

 list.forEach((item) => {
   map.set(item.name, item)
 })

	const dedupped = Array.from(map.values())
  
  console.log(dedupped)
}
