using Moq;
using System;
using System.Collections.Generic;
using System.Linq;

namespace TaskManagement
{
    public class StorageData
    {
        private static readonly Lazy<StorageData> _instance = new Lazy<StorageData>(() => new StorageData());

       
        private StorageData() {
            Items = new List<StorageData>();
        }

        public static StorageData Instance => _instance.Value;

        private List<StorageData> Items { get; }


        public string Name { get; set; }
        public int Priority { get; set; }
        public string Status { get; set; }

        public void Add(StorageData item)
        {
            Items.Add(item);
        }

        // Update an existing object
        public bool Update(string name, StorageData updatedItem)
        {
            var existingItem = Items.FirstOrDefault(x => x.Name == name);
            if (existingItem != null)
            {
                existingItem.Name = updatedItem.Name;
                existingItem.Status = updatedItem.Status;
                existingItem.Priority = updatedItem.Priority;
                return true;
            }
            return false;
        }

        // Delete an object by name
        public bool Delete(string name)
        {
            var item = Items.FirstOrDefault(x => x.Name == name);
            if (item != null)
            {
                Items.Remove(item);
                return true;
            }
            return false;
        }

        // Get the list of objects
        public List<StorageData> GetList()
        {
            return Items;
        }

    }
}
