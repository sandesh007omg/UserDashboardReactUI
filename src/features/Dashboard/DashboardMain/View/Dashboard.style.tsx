import styled from 'styled-components';

const VendorStyled = styled.div`
&.paginated-list{
  .table-present .table-wrap{
  &.pagination-present{
    height: calc(100vh - 163px) !important;
  }
  }
}
.master,
.form-wrapper{
  &.checkbox{
    &>div{
      display: flex;
      flex-direction: column;
      color: #272833;
      font-size: 14px;
      font-weight: 600;
      label{
        span span{
          position: relative;
          top: -2px;
          opacity:1;
        }
      }
    }
    .checkbox-info{
        font-size:10px;
        color:#6B6C7E;
        font-weight:400;
        line-height:14px;
        padding-left: 26px;
        position: relative;
        top: -6px;
      }
  }
    .form-select-input,
      .form-input{
        input,.zindex-2__control{
        background-color:#F1F2F5;
        border:1px solid #E7E7ED;
        }
      }
}
&.paginated-list{
  .section-header{
    .filter-wrap{
      z-index:1 ;
    }
  }
  .table-present{
    .table-wrap{
    height: calc(100vh - 120px) !important;
    max-height:unset !important;
    &.pagination-present{
      .table-wrap{
      height: calc(100vh - 94px) !important;
      }
    }
    }
  }
  table{
  tbody{
  tr{
    cursor:pointer;
      }
    }
    }
    .modal-inner{
      max-width:862px;
      &.delete{
        max-width: 395px;
      }
      .evolve-dialog__body{
        max-height:70vh;
        padding:24px;
        overflow:auto;
        .form-wrapper{
          margin-bottom:24px;
          padding-right: 12px;
          padding-left: 12px;
        }
      }
    }
}
&.details{
  .update_status{
    max-width:832px;
    .pad-24{
    max-height:70vh;
    overflow-y:auto;
    overflow-x:hidden;
    }
    .form-wrapper{
      margin-bottom:24px;
    }
  }
  .section-header{
    &>div{
      display: flex;
    justify-content: space-between;
    padding:16px 48px 17px;
    ul{
      display: flex;
    align-items: center;
}
    }
    }
    .filter-wrap{
      z-index:1;
    }
    .header-title{
      margin:0;
      .title{
      display:none;
    }
    }

    /* for outstandingAmount in name in detailform styling  */
    .name{
      position:relative;
      margin-bottom:16px;
    .outstanding-amount {
      position: absolute;
    top: 44px;
    right: 0;
    font-size: 14px;
    line-height: 21px;
    color: #6b6c7e;
    span {
      font-weight: 600;
    }
    .negative {
      color: red;
    }
  }
}
    /* for outstandingAmount in detailform styling  */
  }
  .section-tab{
    background-color: #FFFFFF;
    .react-tabs__tab-list{
      li{
        cursor:pointer;
      }
    }
  }
  .create-ui-inner{
    padding: 24px 48px;
  }
  .tab-details-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 24px;
    border-radius: 4px;
    background: #FFFFFF;
    h1{
      font-size:16px;
      line-height:24px;
      font-weight:600;
      color:#000000;
    }
    .button-wrap{
      display: flex;
      gap: 16px;
    }
  }
  .tab-section{
    .config-panel-contents{
      padding:0;
    }
    .table-wrap{
      table{
        .icon{
          cursor:pointer;
        }
        thead{
          tr{
            height:32px;
            th{
              padding-bottom:0;
              padding-top:0;
            }
          }
        }
        tbody{
          tr{
            height:40px;
            td{
              padding-bottom:0;
              padding-top:0;
            }
          }
        }
        tbody,
        thead{
          td:first-child,
          th:first-child{
            padding-left:24px;
          }
          td:last-child,
          th:last-child{
            padding-right:24px;
          }
        }
      }
    }
    .detail-form{
      background-color:#FFFFFF;
      padding:24px;
      margin-bottom:24px;
      display:flex;
      flex-wrap:wrap;
      gap:24px;
      li{
        width:48%;
        display:flex;
        flex-wrap:wrap;
        font-size:14px;
        align-items:center;
        gap:16px;
        line-height:21px;
        font-weight:600;
        color:#272833;
        &.master{
          top:0;
          gap:4px;
          width: 100%;
          flex-direction: column;
          align-items: baseline;
        }
        label{
          display:inline-block;
          flex:1;
        }
        p{
          width:363px;
          height:40px;
          line-height:40px;
          width: 68%;
          border:1px solid #E7E7ED;
          border-radius:4px;
          overflow:hidden;
          padding:0 16px;
          font-weight:400;
        }
      }
      .form-wrapper{
        padding-right: 12px;
        padding-left: 12px;
        margin-bottom:24px;
      }
      .form-select-input,
      .form-input{
        display: flex;
        align-items: center;
        flex-wrap:wrap;
        label{
          flex: 1;
        }
        .select-css,
        input{
          width: 60%;
        }
        .form-error{
          width: 100%;
          text-align: right;
        }
      }
    }
    .form-input-wrap{
      width:60%;
    }
  }
}
@media (max-width: 1279px) {
  &.details {
    .tab-section .detail-form li {
    width: 46%;
    p{
      width: 60%;
    }
    }
  }
}
`;
export default VendorStyled;
