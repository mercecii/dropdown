import React, { Component, ErrorInfo, PropsWithChildren } from 'react'


type ErrorBoundaryProps  = {

}

type State = {
    hasError: boolean;
}
export class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>,State> {
    constructor(props:{children:React.ReactNode}) {
      super(props)
    
      this.state = {
         hasError : false,
      }
    }

    public static getDerivedStateFromProps(_:Error){
        return {
            hasError: true
        }
    }
    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }
  render() {
    if(this.state.hasError){
        return (
            <div>Something went wrong</div>
          )
    }
    return this.props.children;
    
  }
}

export default ErrorBoundary