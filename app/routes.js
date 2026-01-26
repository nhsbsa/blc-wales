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
        response.redirect("/location-kickout-uk")
    } else {
        response.redirect("/relation-to-baby")
    }
})


router.post('/main-relation-to-baby', function(request, response) {
    var relation = request.session.data['relationshipToBaby']
    if (relation == "none"){
        response.redirect("/relation-kickout")
    } else {
        response.redirect("/nhs-number")
    }
})

router.post('/know-nhs-number', function(request, response) {
    var knowNHSNum = request.session.data['knowNhsNumber']
    if (knowNHSNum == "yes"){
        response.redirect("/enter-nhs-number")
    } else {
        response.redirect("/what-is-your-name")
    }
})

router.post('/security-code-method', function(request, response) {
    var method = request.session.data['seccode']
    if (method == "email"){
        response.redirect("/enter-security-code-email")
    } else {
        response.redirect("/enter-security-code-text")
    }
})

router.post('/confirm-post-address', function(request, response) {
    var method = request.session.data['confirmAddress']
    if (method == "yes"){
        response.redirect("/add-parent")
    } else {
        response.redirect("/check-your-details-kickout")
    }
})

router.post('/add-parent', function(request, response) {
    var method = request.session.data['parent']
    if (method == "yes"){
        response.redirect("/what-happens-next")
    } else {
        response.redirect("/babys-details")
    }
})

router.post('/number-of-babies-lost', function(request, response) {
    var method = request.session.data['loss-multiple']
    if (method == "single"){
        response.redirect("/date-of-loss-single")
    } else if (method == "twin"){ 
        response.redirect("/twin-loss")
    } else{
        response.redirect("/triplet-loss")
    }
})





