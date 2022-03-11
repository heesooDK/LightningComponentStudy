public with sharing class ContactManager2 {
 
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContact(Integer numberOfRecords) {
        return [SELECT ID, LASTNAME, PHONE FROM Contact LIMIT:numberOfRecords];
    } 
}
