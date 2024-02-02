Feature: Media Viewer Bookmark
    
    Scenarios that test the Bookmark functionality of Media Viewer

    Background:
            Given User is on Media Viewer page
            When User clears existing bookmarks

        Scenario Outline: User adds new bookmark and then deletes it
            When User adds a bookmark
            And User clears existing bookmarks
            Then User should not see anymore bookmarks