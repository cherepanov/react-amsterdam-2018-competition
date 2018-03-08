import React, { Component } from 'react'
// import ralogo from './ralogo.svg'
// import spbflogo from './spbflogo.svg'
// import './index.css'

class Header extends Component {
  componentDidMount() {
    console.log(document.readyState); //eslint-disable-line
    if(document.readyState === 'complete') {
      this.video.play();
    } else {
      document.addEventListener('readystatechange', () => {
        debugger; //eslint-disable-line
        if (document.readyState === 'complete') {
          this.video.play();
        }
      })
    }
  }

  render() {
    return (
      <header className="Header-header">
        <video
          className="Header-video"
          preload="metadata"
          muted
          loop
          ref={video => this.video = video}
          id="bgvid">
          <source src="https://react.amsterdam/video/video.webm#t=0.5" type="video/webm" />
          <source src="https://react.amsterdam/video/video.mp4#t=0.5" type="video/mp4" />
          {/*<source src="https://dmf9cnjua2s32.cloudfront.net/media/vGlo2DsinshgY/4115e253/video_5265_1080_1300.mp4#t=0.5" type="video/mp4" />*/}
        </video>
        <div className="Header-overlay" style={{
          backgroundImage: `linear-gradient(45deg, black 26%, transparent 25%, transparent 75%, black 75%, black),
                            linear-gradient(45deg, black 26%, transparent 25%, transparent 75%, black 75%, black)`,
          backgroundSize: '4px 4px',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backgroundPosition: '0 0, 2px 2px'
        }} />

        <div className="Header-wrapper">
          <div className="Header-logos">
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjIuOCAxMDkuNSI+PGcgZmlsbD0iIzAwZGQzYiI+PHBhdGggZD0iTTY4LjMgMjkuNGMtMi4zLTIuOS00LjUtNS43LTYuOS04LjEtMi4zIDIuNS00LjYgNS4yLTYuOCA4LjEgNC41LS4yIDkuMS0uMiAxMy43IDB6TTU3LjQgMTcuM2MtNS4xLTQuOS0xNy0xNC42LTIzLjgtMTAuNy02LjkgNC00LjMgMTkuMS0yLjcgMjUuOSA1LTEuMSAxMC40LTIgMTYuMi0yLjYgMy40LTQuNiA2LjgtOC45IDEwLjMtMTIuNnptMjIuNSA1NmMzLjctLjUgNy4yLTEuMSAxMC41LTEuOS0xLTMuMi0yLjItNi42LTMuNi0xMC0yLjEgNC4xLTQuNCA4LjEtNi45IDExLjl6bS00LjIgNi4yYy0zLjMgNC43LTYuOCA5LTEwLjMgMTIuNyAxLjYgMS41IDMuMSAyLjggNC42IDQuMSA3LjkgNi4zIDE1IDkgMTkuMiA2LjYgNi45LTQgNC4zLTE5LjEgMi43LTI2LTUgMS4yLTEwLjQgMi4xLTE2LjIgMi42ek02MS40IDk2LjNjLTcuMSA2LjgtMjAuOCAxNy4zLTMwLjcgMTEuNS05LjktNS43LTcuNy0yMi43LTUuMy0zMi4zQzE1LjkgNzIuNyAwIDY2LjIgMCA1NC43YzAtMTEuNCAxNS45LTE4IDI1LjQtMjAuOC0yLjQtOS41LTQuNi0yNi41IDUuMy0zMi4zIDkuOS01LjcgMjMuNiA0LjcgMzAuNyAxMS41QzY4LjYgNi40IDgyLjItNC4xIDkyLjEgMS42YzkuOSA1LjcgNy43IDIyLjcgNS4zIDMyLjMgOS41IDIuOCAyNS40IDkuNCAyNS40IDIwLjhzLTE1LjkgMTgtMjUuNCAyMC44YzIuMyA5LjYgNC42IDI2LjYtNS4zIDMyLjMtNi41IDMuOC0xNS45LjgtMjUuNi03LjEtMS43LTEuMy0zLjQtMi44LTUuMS00LjR6TTI2LjkgNzBjMS41LTQuOSAzLjUtMTAgNS45LTE1LjMtMi40LTUuMy00LjQtMTAuNC01LjktMTUuMy02LjggMi0yMS4yIDcuNC0yMS4yIDE1LjMgMCA4IDE0LjQgMTMuNCAyMS4yIDE1LjN6TTM2IDQ4YzIuMS00LjEgNC40LTggNi45LTExLjgtMy43LjUtNy4yIDEuMS0xMC41IDEuOSAxIDMuMSAyLjIgNi41IDMuNiA5Ljl6bTU5LjktOC42Yy0xLjUgNC45LTMuNSAxMC01LjkgMTUuMyAyLjQgNS4zIDQuNCAxMC40IDUuOSAxNS4zIDYuNy0yIDIxLjItNy40IDIxLjItMTUuM3MtMTQuNC0xMy4zLTIxLjItMTUuM3pNNTcuNCA5Mi4yYy0zLjUtMy43LTYuOS04LTEwLjMtMTIuNy01LjctLjUtMTEuMi0xLjQtMTYuMi0yLjYtMS43IDYuOC00LjIgMjIgMi43IDI2czE4LjctNS44IDIzLjgtMTAuN3ptNC00YzIuMy0yLjUgNC42LTUuMiA2LjktOC4xLTQuNi4yLTkuMS4yLTEzLjcgMCAyLjIgMi45IDQuNSA1LjYgNi44IDguMXptMTEuMi0xNC4xYzQuMi02LjEgNy45LTEyLjYgMTEuMS0xOS4zLTMuMi02LjctNy0xMy4yLTExLjItMTkuMy03LjQtLjUtMTQuOS0uNS0yMi40IDAtNC4yIDYuMS03LjkgMTIuNy0xMS4yIDE5LjMgMy4yIDYuNyA3IDEzLjIgMTEuMiAxOS4zIDcuNi41IDE1LjEuNSAyMi41IDB6TTg2LjggNDhjMS40LTMuNCAyLjctNi44IDMuNy0xMC0zLjMtLjgtNi44LTEuNC0xMC41LTEuOUM4Mi40IDQwIDg0LjcgNDQgODYuOCA0OHptNS4xLTE1LjVjMS43LTYuOCA0LjItMjItMi43LTI1LjktNi45LTQtMTguOCA1LjgtMjMuOCAxMC42IDMuNSAzLjggNyA4IDEwLjMgMTIuNyA1LjguNiAxMS4zIDEuNSAxNi4yIDIuNnpNMzYgNjEuNGMtMS40IDMuNC0yLjYgNi44LTMuNiAxMCAzLjMuNyA2LjggMS40IDEwLjUgMS45LTIuNC0zLjgtNC43LTcuOC02LjktMTEuOXoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01OC41IDM4LjFsMi45IDIuOSAyLjktMi45IDIuMyAyLjQtMi45IDIuOSAyLjkgMi45LTIuMyAyLjMtMi45LTIuOS0yLjkgMi45LTIuNC0yLjMgMi45LTIuOS0yLjktMi45IDIuNC0yLjR6bTguMSAyNS4ybC0yLjkgMi45IDIuOSAyLjktMi4zIDIuMy0yLjktMi45LTIuOSAyLjktMi4zLTIuNCAyLjktMi45LTIuOS0yLjkgMi40LTIuNCAyLjkgMi45IDIuOS0yLjkgMi4yIDIuNXptMC0xMS40bC0yLjkgMi45IDIuOSAyLjktMi4zIDIuMy0yLjktMi45LTIuOSAyLjktMi40LTIuMyAyLjktMi45LTIuOS0yLjkgMi40LTIuNCAyLjkgMi45IDIuOS0yLjkgMi4zIDIuNHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvZz48L3N2Zz4='
                  className="Header-logo"
                  alt="React Amsterdam Logo" />
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iMjM4Ij48cGF0aCBmaWxsPSIjMDBkZDNiIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS43NjYgMTUxLjk0OGM3LjQ1MiAwIDE0LjAyOC0yLjE5IDE5LjQzNS02LjcxNSA1LjU1NC00LjUyNiA4LjMzLTkuNzgxIDguMzMtMTUuOTEzIDAtMTkuODU0LTIzLjA5LTIyLjE5LTMyLjQ0Mi0yNi44NjItNy4xNi00LjA4OC0yLjQ4NC0xMS41MzMgNC42NzctMTEuNTMzIDQuODIyIDAgNy41OTkgMy4wNjYgOC4zMyA1LjQwMi43MyAyLjQ4MSAyLjQ4MyAzLjc5NSA1LjI2IDMuNzk1aDkuMzUzYTMuOTI3IDMuOTI3IDAgMCAwIDMuOTQ1LTMuOTQxYzAtNC41MjYtMi4zMzgtOC45MDYtNy4wMTQtMTMuNDMxLTQuNjc3LTQuNTI2LTExLjI1My02LjcxNi0xOS41ODItNi43MTYtNy4xNiAwLTEzLjQ0NSAyLjA0NC0xOC43MDUgNi4xMzItNS4xMTUgNC4wODctNy43NDYgOS4zNDMtNy43NDYgMTUuNzY2IDAgMTMuNzIzIDEyLjg2IDE4LjU0MSAyMi43OTcgMjIuMTkgNi44NjkgMi40ODMgMTIuNDIyIDUuNTQ4IDEyLjQyMiA5Ljc4MiAwIDMuNjUtMi43NzcgNy4wMDgtOC43NjggNy4wMDgtNC45NjkgMC04LjE4NC0xLjc1Mi05LjY0NS01LjQwMi0xLjAyMy0yLjQ4Mi0yLjc3Ny0zLjc5Ni01LjU1My0zLjc5NmgtOC45MTRBMy45MjcgMy45MjcgMCAwIDAgOCAxMzEuNjU2YzAgNC4zOCAyLjMzOCA4LjkwNSA3LjE2IDEzLjQzMSA0LjgyMyA0LjUyNiAxMS42OTEgNi44NjEgMjAuNjA2IDYuODYxem03Ni4yNTQgMzMuODc5bC0xLjc1My0xLjE2OHYyNS44NGEzLjkyNyAzLjkyNyAwIDAgMS0zLjk0NiAzLjk0Mkg5NS45NDZBMy45MjcgMy45MjcgMCAwIDEgOTIgMjEwLjQ5OXYtOTEuMzlhMy45MjcgMy45MjcgMCAwIDEgMy45NDYtMy45NDFoOC45MTRhMy45MjcgMy45MjcgMCAwIDEgMy45NDUgMy45NDJ2MS4xNjhjNC4yMzgtNC4yMzQgOS42NDUtNi4yNzggMTYuNTE0LTYuMjc4IDcuMTYgMCAxMy4yOTggMi4zMzYgMTguNDEzIDcuMTUzIDUuMTE0IDQuNjcyIDcuNTk5IDEwLjUxMiA3LjU5OSAxNy42NjV2MjUuNjk0YzAgNy4zLTIuNDg1IDEzLjI4NS03LjYgMTguMTAzLTUuMTE0IDQuNjcyLTExLjEwNiA3LjAwNy0xOC4xMiA3LjAwNy01Ljg0NSAwLTExLjM5OS0yLjA0My0xMy41OS0zLjc5NXpNMjM1LjI2NyAyNi45NDJ2MjguNzZjMy42NTMtMy4zNTggOC43NjgtNC45NjQgMTUuMzQ0LTQuOTY0IDcuMDE0IDAgMTMuMDA2IDIuMzM2IDE4LjEyIDcuMTUzIDUuMTE1IDQuNjcyIDcuNiAxMC42NTggNy42IDE3Ljk1N3YyNS42OTRjMCA3LjE1NC0yLjQ4NSAxMi45OTMtNy42IDE3LjgxMS01LjExNCA0LjY3Mi0xMS4yNTIgNy4wMDctMTguNDEyIDcuMDA3LTYuODY5IDAtMTIuMjc2LTIuMDQzLTE2LjUxNC02LjI3N3YxLjE2OGEzLjkyNyAzLjkyNyAwIDAgMS0zLjk0NSAzLjk0MmgtOC45MTRBMy45MjcgMy45MjcgMCAwIDEgMjE3IDEyMS4yNVYyNi45NGEzLjkyNyAzLjkyNyAwIDAgMSAzLjk0Ni0zLjk0aDEwLjM3NWEzLjkyNyAzLjkyNyAwIDAgMSAzLjk0NiAzLjk0MnptMTU1LjI1NiA1Mi44NzZjMS4wMjMuNzMgMS40NiAxLjYwNiAxLjQ2IDIuNzczIDAgLjczLS4yOTEgMS40Ni0uNzMgMi4xOWwtNC45NjggNy4wMDhjLS43MzEuODc2LTEuNjA4IDEuMzE0LTIuNjMgMS4zMTQtLjg3OCAwLTEuNjA4LS4yOTItMi4zMzktLjczLTcuNzQ1LTUuMTEtMTguNDEzLTEuMDIyLTE3LjY4MiA3LjczN3Y1LjU0OGgyMi45NDNjMS45IDAgMy42NTMgMS42MDYgMy42NTMgMy41MDR2OC4xNzVjMCAxLjg5OC0xLjc1MyAzLjUwNC0zLjY1MyAzLjUwNGgtMjIuOTQzdjUzLjg3YTMuOTI3IDMuOTI3IDAgMCAxLTMuOTQ2IDMuOTQxaC0xMC4wODNhMy45MjcgMy45MjcgMCAwIDEtMy45NDYtMy45NDF2LTUzLjg3aC0xMy4wMDZjLTEuOSAwLTMuNjUzLTEuNjA2LTMuNjUzLTMuNTA0di04LjE3NWMwLTEuODk4IDEuNzU0LTMuNTA0IDMuNjUzLTMuNTA0aDEzLjAwNnYtNS4xMWMwLTcuMyAyLjYzLTEzLjQzIDcuNzQ1LTE4LjI0OUMzNTguNTIgNzcuNDgyIDM2NS4wOTUgNzUgMzczLjEzMyA3NWM3LjAxNCAwIDEyLjg2IDEuNjA2IDE3LjM5IDQuODE4em04Mi4yNjUtMzUuMzl2MTMuMTk0bDExLjQ5My0zLjk0MWMxLjItLjE3MSAxLjg4Ny0uMzQzIDIuMjMtLjM0MyAxLjIgMCAyLjA1OCAxLjAyOCAyLjc0NCAyLjkxM2wyLjA1OSA1LjgyN2MwIC41MTQuNjg2IDIuMDU2LjY4NiAyLjc0MiAwIDEuMzctLjg1OCAyLjM5OS0yLjQwMSAyLjkxM2wtMTIuMzUxIDQuNDU1IDcuODkgMTAuMjgyYy4zNDQuNjg2LjUxNSAxLjM3MS41MTUgMi4wNTcgMCAxLjItLjY4NiAyLjIyNy0yLjA1OCAzLjA4NGwtNS42NiA0LjI4NGMtLjUxNS42ODYtMS4zNzMgMS4wMjktMi4yMyAxLjAyOS0xLjIwMiAwLTIuMDYtLjUxNS0yLjkxNy0xLjU0M2wtNy43MTktMTAuMTEtNy43MiAxMC4yODJjLS41MTQuODU2LTEuMiAxLjM3LTIuNCAxLjM3LTEuMDMgMC0xLjg4Ny0uMzQyLTIuNzQ1LTEuMTk5bC02LjE3NS00LjI4NGMtMS4wMy0uODU3LTEuNTQ0LTEuODg1LTEuNTQ0LTIuOTEzIDAtLjY4Ni4xNzEtMS4zNzEuNTE0LTIuMDU3bDcuNTQ4LTEwLjI4Mi0xMi4xNzktNC4xMTJjLTEuNTQ0LS41MTQtMi4yMy0xLjcxNC0yLjIzLTMuMjU2IDAtLjg1Ny4xNzItMS43MTQuNTE1LTIuNzQybDEuODg2LTUuODI3Yy42ODctMS44ODUgMS43MTYtMi45MTMgMy4wODgtMi45MTMuMTcyIDAgLjg1OC4xNzIgMi4yMy4zNDNsMTEuNDkzIDMuOTQxVjQ0LjQyN2MwLTEuODg1IDEuODg3LTMuNDI3IDQuMTE3LTMuNDI3aDcuMjA0YzIuMjMgMCA0LjExNyAxLjU0MiA0LjExNyAzLjQyN3oiLz48L3N2Zz4='
                 className="Header-logo"
                 alt="SPB Frontend Logo" />
          </div>
          <h1 className="Header-title">SPB Frontend & React Amsterdam Competition</h1>
        </div>
      </header>
    )
  }
}

export default Header
