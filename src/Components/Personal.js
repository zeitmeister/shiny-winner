import React, {Component} from 'react'
import StravaStats from './StravaStats';
import SoundCloud from './SoundCloud';
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
        let content;
        if (this.state.stuffToShowId === 1) {
            content = <SoundCloud/>;
        } else if (this.state.stuffToShowId === 2) {
            content = <StravaStats
            distance={this.props.distance}
            count={this.props.count}
            />;
        }
    return(
    <div>
        {content}
        <button
        onClick={() => this.handleClick('soundcloud')}
        >
            My music
        </button>
        <button
        onClick={() => this.handleClick('stravaStats')}
        >
            My workout stats
        </button>
    </div>
    )
    }
}

export default Personal