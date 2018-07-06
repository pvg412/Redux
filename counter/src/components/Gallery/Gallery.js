import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import { counterValue, getGallery } from '../../selectors';

const Gallery = ({gallery}) => {
    return(
        <div className='div-gallery'>
            {gallery.map(obj => <img src={obj.largeImageURL} alt={obj.tags} key={obj.id}/> )}
        </div>
    )
};

function mapStateToProps(state) {
    return {
        gallery: getGallery(state),
    }
}

export default connect(mapStateToProps)(Gallery);