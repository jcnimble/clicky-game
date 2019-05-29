import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friends.json";

//sets state to 0 or empty
class App extends Component {
  state = {
    friends,
    clickedFriends: [],
    score: 0,
    highscore: 0
  };

  //when you click on a card ... the friend is taken out of the array
  imageClick = event => {
    const currentFriend = event.target.alt;
    console.log("click!");
    const FriendAlreadyClicked =
      this.state.clickedFriends.indexOf(currentFriend) > -1;

    //if you click on a friend that has already been selected, the game is reset and cards reordered
    if (FriendAlreadyClicked) {
      alert(`Sorry! You lose. Your Score: ${this.state.score}`);
      this.setState({
        friends: this.state.friends.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedFriends: [],
        score: 0
      });
       this.gameOver();

      //if you click on an available friend, your score is increased and cards reordered
    } else {
      this.setState(
        {
          friends: this.state.friends.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedFriends: this.state.clickedFriends.concat(
            currentFriend
          ),
          score: this.state.score + 1
        },
        //if you get all 12 friends correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert(`You Got Them All! You Win!`);
            this.setState({
              friends: this.state.friends.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedFriends: [],
              score: 0
            });
            this.gameOver();
          }
        }
      );
    }
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    // alert(`Game Over! Your score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  render() {
    return (
      <div>
        <NavBar score={this.state.score} highscore={this.state.highscore}></NavBar>
        <Title></Title>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              imageClick={this.imageClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
