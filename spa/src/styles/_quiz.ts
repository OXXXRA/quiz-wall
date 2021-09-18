import { css } from "styled-components";


export default css`
.question-text {
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .answer-block {
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    width: 100%;
    background: rgba(248, 249, 249, 0.2);
    border-radius: 5px;
    position: relative;
    padding: 0 10px;
    align-items: center;
  }
  
  .answer-rating {
    display: flex;
    align-items: center;
    background: rgba(243, 249, 255, 0.26);
    border-radius: 5px;
  
    align-items: center;
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0px;
  }
  
  .answer-circle {
    margin-right: 0.5rem;
    width: 1.4rem;
    height: 1.4rem;
    background-color: #4387f2;
    border-radius: 50%;
  }
  
  .answers-count-block {
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }
  
  .count-text {
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 0.9rem;
  }
  
  .rating-2 {
    width: 25%;
  }
  
  .rating-3 {
    width: 15%;
  }
  
  /* =====================================users-count */
  
  .counts-container {
    margin-top: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  .counts-group {
    display: flex;
  
    span {
      margin-left: 5px;
  
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
  
  .btn-vote {
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 0.9rem;
    color: #534ee4;
    padding: 10px 25px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
  }

  .btn-add, .icon {
    position: relative;
    aspect-ratio: 1;

    z-index: 200;

    &::before, &::after {
      content: "";
      position: absolute;
      z-index: -1;
      
    }

    &::before {
      left: 50%;
      width: 5%;
      height: 35%;
      margin-left: -2.5%;
    }

    &::after {
      top: 50%;
      height: 5%;
      width: 35%;
      margin-top: -2.5%;
    }
  }

  .btn-add {
    &::before, &::after {
      background: white
    }
  }

  .icon {
    &::before, &::after {
      transform: rotate(45deg);
      background:#404040
    }
  }
`