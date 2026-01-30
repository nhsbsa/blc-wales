//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// enter-location-uk
router.post('/location-answer', function(request, response) {
    var location = request.session.data['country-location']
    if (location == "other"){
        response.redirect("eligibility/location-kickout-uk")
    } else {
        response.redirect("eligibility/relation-to-baby")
    }
})

router.post('/main-relation-to-baby', function(request, response) {
    var relation = request.session.data['relationshipToBaby']
    if (relation == "none"){
        response.redirect("/eligibility/relation-kickout")
    } else {
        response.redirect("/your-details/nhs-number")
    }
})

router.post('/know-nhs-number', function(request, response) {
    var knowNHSNum = request.session.data['knowNhsNumber']
  
    if (knowNHSNum == "yes" || knowNHSNum == "ydw"  ){
      
        response.redirect("/your-details/enter-nhs-number")
    } else {
        response.redirect("/your-details/what-is-your-name")
        
    }
})

router.post('/security-code-method', function(request, response) {
    var method = request.session.data['seccode']
    if (method == "email"){
        response.redirect("/verification/enter-security-code-email")
    } else {
        response.redirect("/verification/enter-security-code-text")
    }
})


router.post('/confirm-post-address', function(request, response) {
    var method = request.session.data['confirmAddress']
    if (method == "yes"){
        response.redirect("/other-parent-details/add-parent")
    } else {
        response.redirect("/your-details/check-your-details-kickout")
    }
})


router.post('/add-another-parent', function(request, response) {
    var method = request.session.data['addAnotherParent']
    if (method == "yes"){
        response.redirect("/other-parent-details/what-happens-next")
    } else {
        response.redirect("/pregnancy-details/what-happens-next")
    }
})

router.post('/number-of-babies-lost', function(request, response) {
    var method = request.session.data['loss-multiple']
    if (method == "1-cert"){
        response.redirect("/1-cert/date-of-loss")
    } else if (method == "twin"){ 
        response.redirect("/pregnancy-details/twin-loss")
    } else{
        response.redirect("/pregnancy-details/triplet-loss")
    }
})

router.post('/baby-sex-choice-1-cert', function(request, response) {
    var method = request.session.data['gender']
    if (method == "yes"){
        response.redirect("/1-cert/sex-of-baby")
    }  else{
        response.redirect("/1-cert/name-of-baby")
    }
})


router.post('/confirmation-1-cert-another-cert', function(request, response) {
    var method = request.session.data['certreq']
    if (method == "yes"){
        response.redirect("/add-other-parent")
    }  else{
        response.redirect("/confirmation-page-new-1-cert")
    }
})

router.post('/twin-losses', function(request, response) {
    var method = request.session.data['bothbabies']
    if (method == "yes"){
        response.redirect("/2-certs/baby-1/date-of-loss")
    }  else{
        response.redirect("/1-cert/date-of-loss")
    }
})

router.post('/triplet-losses', function(request, response) {
    var method = request.session.data['triplet-loss']
    if (method == "single"){
         response.redirect("/1-cert/date-of-loss")
    }  else{
        response.redirect("/2-certs/baby-1/date-of-loss")
    }
})

router.post('/2-certs/baby-1-include-sex', function(request, response) {
    var method = request.session.data['include-sex']
    if (method == "yes"){
        response.redirect("/2-certs/baby-1/sex-of-baby")
    }  else{
        response.redirect("/2-certs/baby-1/name-of-baby")
    }
})

router.post('/2-certs/baby-2-include-sex', function(request, response) {
    var method = request.session.data['include-sex']
    if (method == "yes"){
        response.redirect("/2-certs/baby-2/sex-of-baby")
    }  else{
        response.redirect("/2-certs/baby-2/name-of-baby")
    }
})



////////////////////////////
///------- MAIN V1 -------//
///////////////////////////


router.post('/mainV1-location-answer', function(request, response) {
    var location = request.session.data['country-location']
    if (location == "other"){
        response.redirect("/main-V1/eligibility/location-kickout-uk")
    } else {
        response.redirect("/main-V1/eligibility/relation-to-baby")
    }
})

router.post('/mainV1-main-relation-to-baby', function(request, response) {
    var relation = request.session.data['relationshipToBaby']
    if (relation == "none"){
        response.redirect("/main-V1/eligibility/relation-kickout")
    } else {
        response.redirect("/main-V1/your-details/nhs-number")
    }
})

router.post('/mainV1-know-nhs-number', function(request, response) {
    var knowNHSNum = request.session.data['knowNhsNumber']
  
    if (knowNHSNum == "yes" || knowNHSNum == "ydw"  ){
      
        response.redirect("/main-V1/your-details/enter-nhs-number")
    } else {
        response.redirect("/main-V1/your-details/what-is-your-name")
        
    }
})

router.post('/mainV1-security-code-method', function(request, response) {
    var method = request.session.data['seccode']
    if (method == "email"){
        response.redirect("/main-V1/verification/enter-security-code-email")
    } else {
        response.redirect("/main-V1/verification/enter-security-code-text")
    }
})


router.post('/mainV1-confirm-post-address', function(request, response) {
    var method = request.session.data['confirmAddress']
    if (method == "yes"){
        response.redirect("/main-V1/other-parent-details/add-parent")
    } else {
        response.redirect("/main-V1/your-details/check-your-details-kickout")
    }
})


router.post('/mainV1-add-another-parent', function(request, response) {
    var method = request.session.data['addAnotherParent']
    if (method == "yes"){
        response.redirect("/main-V1/other-parent-details/what-happens-next")
    } else {
        response.redirect("/main-V1/pregnancy-details/what-happens-next")
    }
})

router.post('/mainV1-number-of-babies-lost', function(request, response) {
    var method = request.session.data['loss-multiple']
    if (method == "1-cert"){
        response.redirect("/main-V1/1-cert/date-of-loss")
    } else if (method == "twin"){ 
        response.redirect("/main-V1/pregnancy-details/twin-loss")
    } else{
        response.redirect("/main-V1/pregnancy-details/triplet-loss")
    }
})

router.post('/mainV1-baby-sex-choice-1-cert', function(request, response) {
    var method = request.session.data['gender']
    if (method == "yes"){
        response.redirect("/main-V1/1-cert/sex-of-baby")
    }  else{
        response.redirect("/main-V1/1-cert/name-of-baby")
    }
})


router.post('/mainV1-confirmation-1-cert-another-cert', function(request, response) {
    var method = request.session.data['certreq']
    if (method == "yes"){
        response.redirect("/main-V1/add-other-parent")
    }  else{
        response.redirect("/main-V1/confirmation-page-new-1-cert")
    }
})

router.post('/mainV1-twin-losses', function(request, response) {
    var method = request.session.data['bothbabies']
    if (method == "yes"){
        response.redirect("/main-V1/2-certs/baby-1/date-of-loss")
    }  else{
        response.redirect("/main-V1/1-cert/date-of-loss")
    }
})

router.post('/mainV1-triplet-losses', function(request, response) {
    var method = request.session.data['triplet-loss']
    if (method == "single"){
         response.redirect("/main-V1/1-cert/date-of-loss")
    }  else{
        response.redirect("/main-V1/2-certs/baby-1/date-of-loss")
    }
})

router.post('/mainV1-2-certs/baby-1-include-sex', function(request, response) {
    var method = request.session.data['include-sex']
    if (method == "yes"){
        response.redirect("/main-V1/2-certs/baby-1/sex-of-baby")
    }  else{
        response.redirect("/main-V1/2-certs/baby-1/name-of-baby")
    }
})

router.post('/mainV1-2-certs/baby-2-include-sex', function(request, response) {
    var method = request.session.data['include-sex']
    if (method == "yes"){
        response.redirect("/main-V1/2-certs/baby-2/sex-of-baby")
    }  else{
        response.redirect("/main-V1/2-certs/baby-2/name-of-baby")
    }
})