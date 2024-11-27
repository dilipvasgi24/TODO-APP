using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Mime;
using System.Threading.Tasks;
using TaskManagement.Models;

namespace TaskManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly StorageData _storageData;

        public TaskController(StorageData storageData)
        {
            _storageData = storageData;
        }


        [HttpGet]
        public IActionResult GetTaskdetails()
        {

            var tasklist = _storageData.GetList();

            return Ok(tasklist);
        }

        [HttpDelete("{name}")]
        
        public IActionResult DeleteTask(string name)
        {
            
            _storageData.Delete(name);

            return Ok();
        }

        [HttpPost]
        [Consumes(MediaTypeNames.Application.Json)]
        public IActionResult CreateTask([FromBody] TaskData task)
        {
            _storageData.Name = task.TaskName;
            _storageData.Priority = task.Priority;
            _storageData.Status = task.Status;
            _storageData.Add(_storageData);
            return Ok();
        }

        [HttpPost]
        [Consumes(MediaTypeNames.Application.Json)]
        public IActionResult UpdateTask([FromBody] TaskData task)
        {
            _storageData.Name = task.TaskName;
            _storageData.Priority = task.Priority;
            _storageData.Status = task.Status;
            _storageData.Update(_storageData.Name, _storageData);
            return Ok();
        }
    }
}
