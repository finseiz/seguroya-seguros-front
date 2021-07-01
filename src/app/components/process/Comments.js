import React from 'react'
import PropTypes from 'prop-types'

/**
 * 
 * @param {array} commentList - {comment, qualification, userName, userImageUrl}
 * @returns 
 */
const Comments = ({ commentList }) => {
    return (
        <>
            {/** Insurance Comments */}
            <p className="plans_sel_plan-comment mt-5"> Comentarios </p>
            {
                commentList.map( ( comment, i ) => (
                    <div key={i} className="row">

                        <div className="col-auto">
                            <img 
                                src={toAbsoluteUrl(`/media/images/comment.png`)}
                            />
                        </div>

                        <div className="col">
                            <p className="plans_sel_plan-comment-label mb-0"> {comment.userName} </p>
                            <div className="row">
                                <p className="plans_sel_plan-comment-label my-2"> Calificación: {comment.qualification}/5 </p>
                                <Qualification qualification={comment.qualification} className="mx-2" />
                            </div>
                            <p> {comment.comment} </p>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

Comments.propTypes = {

}

export default Comments
