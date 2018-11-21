import React, {Component} from 'react'
import StravaStats from './StravaStats';
class Personal extends Component {

    state = {
        stuffToShowId: 0
    }

    handleClick = (stuffToShow) => {
        if (stuffToShow === 'soundcloud') {
            this.setState({
                stuffToShowId : 1
            }); 
        } else if(stuffToShow === 'stravaStats') {
            this.setState({
                stuffToShowId: 2
            });
        }
    }
    render() {
        
    return(
    <div>
        {this.state.stuffToShowId === 1 ? <iframe title="1" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/214749296&color=%23e4b853&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe> : <StravaStats/ >} {
            
        }
        <button
        onClick={() => this.handleClick('soundcloud')}
        >
            My music
        </button>
        <button
        >
            My workout stats
        </button>
    </div>
    )
    }
}

export default Personal