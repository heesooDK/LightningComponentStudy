public with sharing class ContactManager {
    
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContact() {
        return [SELECT ID, LASTNAME, PHONE FROM Contact LIMIT 20];
    }
}
