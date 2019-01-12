import React from 'react'

export const LoadingProgress = ({loading}) => {
    return (
        <div className={`loading-progress${loading ? ' s-loading' : ' h-loading'}`}>
            <div className="card darken p-3">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="text-center">
                    Loading <br/>
                    Sync device
                </div>
            </div>
        </div>
    )
}