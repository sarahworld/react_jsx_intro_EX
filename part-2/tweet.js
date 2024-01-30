const TweetComponent = ({ tweetsData }) => {
   

    return (
        <div>
            {tweetsData.map(tweet => <h2>username:{tweet.username}, 
                name:{tweet.name},
                Date:{tweet.date}, 
                Message:{tweet.message} </h2>)}
        </div>
    )
}