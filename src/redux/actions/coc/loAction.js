import * as firebase from 'firebase/app'
import { history } from '../../../history'
import axios from 'axios'

//import { sessionService } from 'redux-react-session'

let firebaseAuth = firebase.auth()
// const initAuth0 = new auth0.WebAuth(configAuth)

export const getLoDatabyUser = user => {
    return dispatch => {
      dispatch({
        type: 'GET_LO_DATA_BY_USER_LOADING'
      })
      
      
      axios.get('http://65.1.215.55:4003/coc/lo/alldata/e44fdeef-922e-4c2f-9f0c-107ae1f1cc5555')
      .then(response => {
        var fetchLoUserData
        if (response.data) {
        fetchLoUserData = response.data.entityData
        fetchLoUserData = Object.assign({}, ...fetchLoUserData)
        if (response.err) {
          console.log(response.err)
        }

        dispatch({
            type: 'GET_LO_DATA_BY_USER_SUCCESS',
            payload: {
              data: fetchLoUserData
            }
          })
      }
  })
      .catch(err => {
        dispatch({
          type: 'GET_LO_DATA_BY_USER_FAILURE'
        })
        console.log(err)
      })
  }
}

  export const updateLoDatabyUser = entityData => {
    return dispatch => {
      dispatch({
    type: 'UPDATE_LO_DATA_BY_USER_LOADING'
  })
  
  let userId =
      entityData && entityData.hasOwnProperty('userId') ?
      entityData.userId :
          'e44fdeef-922e-4c2f-9f0c-107ae1f1ccc4'
      axios.post(`http://localhost:4001/coc/lo/alldata/${userId}`,
          {
            loAllDetails: {
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
              loDetails:{
                //"loCode":154854,
                nameApplicant:entityData.nameOfApplicant,
                dateIncorporationlo:entityData.dateIncorporationlo,
                incometaxPan:entityData.incomeTaxPan,
                natureActivitiesUnderTakenwithNic:entityData.natureOfActivitiesUnderTakenwithNic,
                dateApprovalOffice:entityData.dateApprovalOffice,
                validityPeriodTheApproval:entityData.validityPeriodOFTheApproval,
                incomeAndExpendiruteTheLoBo:entityData.incomeAndExpendiruteOfTheLoBo,
                datesOfSubmissionAnnualActivityCertificates:entityData.datesOfSubmissionOfAnnualActivityCertificates,
                natureContraventionsAndReasonsForTheContravention:entityData.natureOfContraventionsAndReasonsForTheContravention,
                allSupportingDocumentsMaySubmitted:entityData.allSupportingDocumentsMayBeSubmitted
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
      var updatedLoUserData

      if(response.data){
        updatedLoUserData = response.data

        dispatch({
          type: 'UPDATE_LO_DATA_SUCCESS',
          payload: {
            updatedLoUserData
          }
        })
      }
    })
    .catch(err => {
      dispatch({
        type: 'UPDATE_LO_DATA_BY_USER_FAILURE'
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
