$(function () {
  $('#startTime1').fdatepicker({
    language: 'zh-CN',
    format: 'yyyy-mm-dd',
  });

  $('#endTime1').fdatepicker({
    language: 'zh-CN',
    format: 'yyyy-mm-dd',
  });

  $('#startTime2').fdatepicker({
    language: 'zh-CN',
    format: 'yyyy-mm-dd',
  });

  $('#endTime2').fdatepicker({
    language: 'zh-CN',
    format: 'yyyy-mm-dd',
  });

  $('#addBtn').on('click', function () {
    $('#addForm').validate({
      rules: {
        name: {
          required: true
        },
        projectManager: {
          required: true
        },
        cost: {
          required: true
        },
        startTime: {
          required: true
        },
        endTime: {
          required: true
        }
      },
      messages: {
        name: {
          required: '请输入项目名称'
        },
        projectManager: {
          required: '请选择项目总负责人'
        },
        cost: {
          required: '请输入实施成本预算'
        },
        startTime: {
          required: '请选择计划开始日期'
        },
        endTime: {
          required: '请选择计划结束日期'
        }
      }
    });

    if (!$('#addForm').valid()) {
      $('#addModal').modal('hide');
      $('#saveErrorModal').modal('show');
      setTimeout(function () {
        $('#saveErrorModal').modal('hide');
      }, 2000);
      return;
    }
    $('#addModal').modal('hide');
    $('#saveSuccessModal').modal('show');
    setTimeout(function () {
      $('#saveSuccessModal').modal('hide');
    }, 2000);
  });

  $('#editBtn').on('click', function () {
    $('#editForm').validate({
      rules: {
        name: {
          required: true
        },
        projectManager: {
          required: true
        },
        cost: {
          required: true
        },
        startTime: {
          required: true
        },
        endTime: {
          required: true
        }
      },
      messages: {
        name: {
          required: '请输入项目名称'
        },
        projectManager: {
          required: '请选择项目总负责人'
        },
        cost: {
          required: '请输入实施成本预算'
        },
        startTime: {
          required: '请选择计划开始日期'
        },
        endTime: {
          required: '请选择计划结束日期'
        }
      }
    });

    $('#editForm').valid();
  });
});