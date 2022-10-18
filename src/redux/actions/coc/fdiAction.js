import * as firebase from 'firebase/app'
import { history } from '../../../history'
import axios from 'axios'

//import { sessionService } from 'redux-react-session'

let firebaseAuth = firebase.auth()
// const initAuth0 = new auth0.WebAuth(configAuth)

export const getFdiDatabyUser = user => {
    return dispatch => {
      dispatch({
        type: 'GET_FDI_DATA_BY_USER_LOADING'
      })
      
      
      axios.get('http://localhost:4001/coc/fdi/alldata/e44fdeef-922e-4c2f-9f0c-107ae1f1cc4000')
      .then(response => {
        var fetchFdiUserData
        if (response.data) {
        fetchFdiUserData = response.data.entityData
        fetchFdiUserData = Object.assign({}, ...fetchFdiUserData)
        if (response.err) {
          console.log(response.err)
        }

        dispatch({
            type: 'GET_FDI_DATA_BY_USER_SUCCESS',
            payload: {
              data: fetchFdiUserData
            }
          })
      }
  })
      .catch(err => {
        dispatch({
          type: 'GET_FDI_DATA_BY_USER_FAILURE'
        })
        console.log(err)
      })
  }
}

  export const updateFdiDatabyUser = entityData => {
    return dispatch => {
      dispatch({
    type: 'UPDATE_FDI_DATA_BY_USER_LOADING'
  })
  
  let userId =
      entityData && entityData.hasOwnProperty('userId') ?
      entityData.userId :
          'e44fdeef-922e-4c2f-9f0c-107ae1f1ccc4'
          
      axios.post(`http://localhost:4001/coc/fdi/alldata/${userId}`,
          {
            fdiAllDetails: {
              entityDetails: {
                //"entityCode":149,
                legalNameBusiness: entityData.legalNameOfBusiness,
                dateIncorporation: entityData.dateOfIncorporation,
                cinNumber:entityData.CINnumber,
                panNumber:entityData.PANnumber,
                selectnicOption:entityData.selectnicOption,
                mainactivities:entityData.mainActivities,
                additionalactivities:entityData.additionalActivities,
                selectactivityOption:entityData.selectactivityOption,
                buildingNo:entityData.buildingNumber,
                floorNo:entityData.floorNumber,
                nameThePremisesOrBuilding:entityData.nameOfThePremisesOrBuilding,
                Street: entityData.roadOrStreet,
                Area: entityData.area,
                City:entityData.cityOrTownOrLocalityOrVillage,
                State:entityData.state,
                Country:entityData.country,
                Pincode:entityData.pincode,
                officeemailAddress:entityData.officeEmailAddress,
                mobileNo:entityData.mobileNumber,
                officeTelephoneNo: entityData.officeTelephoneNumber,
                officeFaxNo:entityData.officeFaxNumber,
              },
              compoundingDetails: {
                //"compoundingCode":12,
                natureContravention:entityData.natureOfContravention,
                selectFema:entityData.selectFema,
                selectRegulationNo: entityData.selectRegulationNo,
                topicNameDescription:entityData.input1,
                sampleOthers: entityData.sampleOthers,
                selectCAAoption:entityData.selectCAAoption,
                selectcentralOptions:entityData.selectcentralOptions,
                subjectCompounding:entityData.subjectOfCompounding,
                sample_subjectOfCompounding_1:entityData.sample_subjectOfCompounding_1,
                sample_subjectOfCompounding_2:entityData.sample_subjectOfCompounding_2,
                sample_subjectOfCompounding_3:entityData.sample_subjectOfCompounding_3,
                rbiReferenceLetter:entityData.rbiLetter,
                sampleRbi: entityData.sampleRbi,
                residentoutsideIndia:entityData.residentOutsideIndia,
                sample_indiaOrNot_1:entityData.sample_indiaOrNot_1,
                sample_indiaOrNot_2:entityData.sample_indiaOrNot_2,
                sample_indiaOrNot_3:entityData.sample_indiaOrNot_3,
                nameAdjudicatingAuthority:entityData.nameOfAdjudicatingAuthority,
                compoundingApplicationfee:entityData.compoundingApplicationFee,
                dateIncorporationmod2:entityData.dateIncorporationmod2,
                officeTeleNo:entityData.officeTeleNumber,
                selectpayOption:entityData.selectpayOption
              },
              submissionDetails: {
                //"submissionCode":121,
                background_input:entityData.background,
                natureofcontraventions_input:entityData.natureofcontraventions,
                delayreasons_input:entityData.delayreasons,
                petitionrequest_input:entityData.petitionrequest,
                sample1:entityData.sample1,
                sample2:entityData.sample2,
                sample3:entityData.sample3,
                sample4:entityData.sample4
              },
              fdiDetails:{
                //"fdiCode":154854,
                nameApplicant:entityData.nameofApplicant,
                dateIncorporationfdi:entityData.dateIncorporationfdi,
                incometaxPan:entityData.incomeTaxPan,
                natureActivitiesUnderTakenNicCode:entityData.natureOfActivitiesUnderTakenNicCode,
                briefParticularsAboutForeignInvestor:entityData.briefParticularsAboutTheForeignInvestor,
                detailsForeignInwardRemittancesRecievedByApplicantCompanyFromDateOfIncorporationTillDate:entityData.detailsOfForrignInwardRemittancesRecievedByApplicantCompanyFromDateOfIncorporationTillDate,
                copiesBalanceSheetDuringThePeriodOfReceiptOfShareApplicationMoney:entityData.copiesOfBalanceSheetDuringThePeriodOfReceiptOfShareApplicationMoney,
                natureContraventionAndReasonsForTheContravention:entityData.natureOfContraventionAndReasonsForTheContravention,
                SlNoTA:entityData.slNoTA,
                TAnameRemitter:entityData.TAnameOfRemitter,
                TAtotalamount:entityData.TAtotalAmount,
                dateReportingRbiTA:entityData.dateReportingRbiTA,
                reportrbiTA:entityData.reportrbiTA,
                TAdelayifany:entityData.TAdelayIfAny,
                TATotal:entityData.TAtotal,
                TBnameofInvestor:entityData.TBnameOfInvestor,
                dateAllotmentOfSharesTB:entityData.dateAllotmentOfSharesTB,
                TBnoSharesAlloted:entityData.TBnoOfSharesAlloted,
                TBamountWhichSharesAlloted:entityData.TBamountForWhichSharesAlloted,
                dateReportingRBITB:entityData.dateReportingRBITB,
                TBdelayifany:entityData.TBdelayIfAny,
                TBTotal:entityData.TBtotal,
                TCSlNo:entityData.TCslNo,
                TcnameRemitter:entityData.TcnameOfRemitter,
                TCtotalamountINR:entityData.TCtotalAmountINR,
                dateRecieptTC:entityData.dateRecieptTC,
                TCExcessshareApplicationMoney:entityData.TCExcessShareApplicationMoney,
                dateRefundTC:entityData.dateRefundTC,
                TCamountinForex:entityData.TCamountInForex,
                rbiletterTC:entityData.rbiletterTC,
                ACslNo:entityData.ACSlNo,
                DateTI:entityData.DateTI,
                nameACenterAuthorizationCapital:entityData.nameACenterAuthorizationZCapital,
                ACEffectFrom:entityData.ACwithEffectFrom,
                ACdateBoardMeeting:entityData.ACdateOfBoardMeeting,
                dateFillingROC:entityData.dateOfFillingROC
              },
              annexuresDetails:{
                //annexuresCode:485,
                annexureCheckbox1:entityData.annexureCheckbox1,
                annexureCheckbox2:entityData.annexureCheckbox2,
                annexureCheckbox3:entityData.annexureCheckbox3,
                annexureCheckbox4:entityData.annexureCheckbox4,
                annexureCheckbox5:entityData.annexureCheckbox5,
                annexureCheckbox6:entityData.annexureCheckbox6,
                annexureCheckbox7:entityData.annexureCheckbox7,
                annexureCheckbox8:entityData.annexureCheckbox8,
                annexureCheckbox9:entityData.annexureCheckbox9,
                annexureCheckbox10:entityData.annexureCheckbox10,
                annexureCheckbox11:entityData.annexureCheckbox11,
                selectAnnexure1:entityData.selectAnnexure1,
                selectAnnexure2:entityData.selectAnnexure2,
                selectAnnexure3:entityData.selectAnnexure3,
                selectAnnexure4:entityData.selectAnnexure4,
                selectAnnexure5:entityData.selectAnnexure5,
                selectAnnexure6:entityData.selectAnnexure6,
                selectAnnexure7:entityData.selectAnnexure7,
                selectAnnexure8:entityData.selectAnnexure8,
                selectAnnexure9:entityData.selectAnnexure9,
                selectAnnexure10:entityData.selectAnnexure10,
                selectAnnexure11:entityData.selectAnnexure11,
              },
              authorisedSignatory:{
                //authorisedCode:451,
                nameOfPerson:entityData.nameOfThePerson,
                addressOfPerson:entityData.addressOfThePerson,
                Pannumber:entityData.panNumber,
                designation:entityData.designationOrStatus
              }
            }
          }
        )
    .then(response => {
      var updatedFdiUserData

      if(response.data){
        updatedFdiUserData = response.data

        dispatch({
          type: 'UPDATE_FDI_DATA_SUCCESS',
          payload: {
            updatedFdiUserData
          }
        })
      }
    })
    .catch(err => {
      dispatch({
        type: 'UPDATE_FDI_DATA_BY_USER_FAILURE'
      })
      console.log(err)
    })
    }
  }
  
  export const changeRole = role => {
    return dispatch =>
      dispatch({
        type: 'CHANGE_ROLE',
        userRole: role
      })
  }
