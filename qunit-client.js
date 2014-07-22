var chocoFailureReport = [];

QUnit.log(function( details ) {
  if ( details.result ) {
    return;
  }
  var loc = details.module + ": " + details.name + ": ",
      output = "FAILED: " + loc + ( details.message ? details.message + ", " : "" );

  if ( details.actual ) {
    output += "expected: " + details.expected + ", actual: " + details.actual;
  }
  if ( details.source ) {
    output += ", " + details.source;
  }
  chocoFailureReport.push( output );
});

QUnit.done(function( details ) {
  // console.log( "Total: ", details.total, " Failed: ", details.failed, " Passed: ", details.passed, " Runtime: ", details.runtime );
  window.chocoReady = true;
  details.jsonReport = chocoFailureReport;
  details.failures = details.failed;
  window.testResults = details;
});
