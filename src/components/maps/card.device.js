import React from 'react'

export const CardDevice = ({name,imageUrl,status, trackDevice}) => {
    return (
        <div className="card">
            <div className="text-center">{name}</div>
            <div className="row">
                <div className="col-md">
                    <img src={imageUrl} className="box" style={{
                    width: '300px',
                    height: '300px',
                    margin: 'auto'
                    }}/>
                </div>
                <div className="col-md">
                    <div className="row">
                        <div className="col">Status</div>
                        <div className="col">
                            <div className="text-danger">
                                {
                                    status ? <div className="text-success">Active</div> :
                                    <div className="text-danger">Not Active</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-danger" onClick={() => {
                trackDevice(true)
                setTimeout(() => {
                    trackDevice(false)
                }, 5000)
            }}>Track This Device</button>
        </div>
    )
}