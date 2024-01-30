function App (){
    const tweetsData = [{username:'user01', name:'name01', date:'2024/04/22', message:'Message-01' },
    {username:'user02', name:'name02', date:'2024/08/22', message:'Message-02' },
    {username:'user03', name:'name03', date:'2024/09/22', message:'Message-03' }]
    return (
        <div>
             
             <TweetComponent tweetsData={tweetsData} />
             
        </div>
       
        
    )

}