import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const cursor = <span className="Terminal-cursor" />
const prompt = <span className="Terminal-prompt">$ </span>

const renderLines = lines => {
  return lines.map(line => {
    return (
      <React.Fragment key={line.id}>
        {line.cmd ? prompt : ''}
        {line.text}
        {line.current ? cursor : ''}
        <br />
      </React.Fragment>
    )
  })
}

const getWindowStyle = (white) => {
  return classNames({
    'Terminal-window': true,
    'Terminal-window-white': white
  })
}

const getTerminalStyle = (code) => {
  return classNames({
    'Terminal-term': true,
    'Terminal-term-code': code
  })
}

const getButtonStyle = (type) => {
  return classNames({
    'Terminal-btn': true,
    'Terminal-btn-close': type === 'close',
    'Terminal-btn-minimize': type === 'minimize',
    'Terminal-btn-maximize': type === 'maximize'
  })
}

const getBodyStyle = (code) => {
  return classNames({
    'Terminal-body': true,
    'Terminal-body-animated': !code
  })
}

const getConsoleStyle = (code, white) => {
  return classNames({
    'Terminal-console': true,
    'Terminal-console-code': code,
    'Terminal-console-white': white
  })
}

const Terminal = ({ children, white, height, code }) => {
  return (
    <div className={getWindowStyle(white)}>
      <div className={getTerminalStyle(code)} style={height ? {height} : null}>
        <div className="Terminal-header">
          <span
            className={getButtonStyle('close')}
          />
          <span
            className={getButtonStyle('minimize')}
          />
          <span
            className={getButtonStyle('maximize')}
          />
        </div>
        <div className={getBodyStyle(code)}>
          <div className={getConsoleStyle(code, white)}>
            {code ? (
              <code className="Terminal-code">
                {children}
              </code>
            ) : (
              <div className="Terminal-code">
                {renderLines(children)}
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .Terminal-window {
          position: relative;
          width: 100%;
          height: 100%;
          border: 1px solid rgb(51, 51, 51);
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
          background: rgb(0, 0, 0);
        }

        .Terminal-window-white {
          background: #fff;
          border-style: solid;
          border-color: transparent;
        }

        .Terminal-term {
          width: 100%;
          height: ${height}px;
          min-width: 500px;
        }

        .Terminal-term-code {
          height: 100%;
        }

        .Terminal-header {
          position: absolute;
          width: 100%;
          top: 18px;
        }

        .Terminal-body {
          width: 100%;
          height: 100%;
          margin-top: 45px;
        }

        .Terminal-body-animated {
          position: absolute;
        }

        .Terminal-console {
          font-size: 12px;
          font-family: Menlo, DejaVu Sans Mono, Consolas, Lucida Console, monospace;
          line-height: 24px;
          color: rgb(255, 255, 255);
          margin: 0px 16px;
        }

        .Terminal-console-code {
          margin: 40px 16px;
        }

        .Terminal-console-white {
          color: #000;
        }

        .Terminal-btn {
          display: inline-block;
          position: absolute;
          border-radius: 50%;
          width: 12px;
          height: 12px;
          top: 50%;
          transform: translateY(-50%)
        }

        .Terminal-btn-close {
          background-color: rgb(255, 95, 86);
          left: 13px
        }

        .Terminal-btn-minimize {
          background-color: rgb(255, 189, 46);
          left: 33px
        }

        .Terminal-btn-maximize {
          background-color: rgb(39, 201, 63);
          left: 53px
        }

        .Terminal-prompt {
          color: rgb(204, 204, 204)
        }

        .Terminal-cursor {
          display: inline-block;
          width: 6px;
          height: 15px;
          background: rgb(248, 28, 229);
          vertical-align: middle;
        }

        .Terminal-code {
          margin: 0;
          font-size: 12px;
          font-family: Menlo, DejaVu Sans Mono, Consolas, Lucida Console, monospace;
          line-height: 20px;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  ) 
}

Terminal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  white: PropTypes.bool,
  height: PropTypes.number,
  code : PropTypes.bool
}

export default Terminal
