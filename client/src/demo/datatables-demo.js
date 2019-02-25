/* global $ */
// Call the dataTables jQuery plugin

export function setup() {
  $(document).ready(function () {
    $('#dataTable').DataTable();
  });
}
