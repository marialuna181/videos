import React , {Component} from 'react'

export default class VideoSearch extends Component {
    state = {
        term : ''
    }

    handlerChange=(e)=>{
        this.setState({
            term: e.target.value 
        },()=>{
            this.props.handlerChangeInput(this.state.term)    
        })

    }

    render(){
        return(
            <div >
                <input  name="value" 
                style={{width:'90%', margin:'10px 0 10px 5%', height:30}}
                        type="search"
                        value={this.props.term}
                        onChange={(e)=>this.handlerChange(e)} 
                        placeholder="Search" />
            </div>
        )
    }


}