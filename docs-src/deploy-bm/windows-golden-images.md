# Windows Golden Images

## Prepare Image Streamer with Windows Artifact Bundle

- Download the "HPE - Windows - 2018-10-26.zip" artifact bundle from the GitHub repository at [https://github.com/HewlettPackard/image-streamer-windows](https://github.com/HewlettPackard/image-streamer-windows). The file is available in the `artifact-bundles` directory.  The artifacts are supported on HPE Image Streamer 4.1 and higher for Windows 2016, 
while version 4.2 and higher are required for Windows 2019. This solution has been tested using Windows 2016 on HPE Image Streamer 4.1.
- Upload the Artifact bundle to the Image Streamer appliance
- Extract the Artifact Bundle on the Image Streamer appliance


## Create Windows Golden Image

The procedure for creating a Windows Server 2016 golden image are documented in the Image Streamer GitHub repostiory at [https://github.com/HewlettPackard/image-streamer-windows](https://github.com/HewlettPackard/image-streamer-windows). See the appropriate file in the `docs` directory [here](https://github.com/HewlettPackard/image-streamer-windows/blob/v4.1/docs/HPE%20Synergy%20Image%20Streamer%20Microsoft%20Windows%20Artifact%20Bundle%20Documentation.pdf).

The instructions are repeated here for convenience, but you should rely on the Image Streamer repository for the definitive version of the documentation.

1. Ensure that you have access to Windows 2016 or 2019 ISO file.
2. Create a server profile with `“HPE - Foundation 1.0 - create empty OS Volume”` as OS Deployment plan
and a server hardware of desired hardware type (see section on Golden Image Compatibility below). Set
an appropriate value for volume size in MiB units, say `40000 MiB`. The HPE Synergy Server will be
configured for access to this empty OS Volume.
3. Launch iLO Integrated Remote Console of this server and set the Windows 2016 or 2019 ISO file as
virtual CD-ROM/DVD image file. Power on the server.
4. Windows should present an option of installing from CD/DVD. Continue with this option.
5. Install Windows 2016 or 2019.
6. (Optional) To take a backup of this installation at this stage:  
    a. Shutdown the server  
    b. Perform an as-is capture using "HPE - Windows - Capture - As-Is" build plan to create the "as-is"
golden image of the OS.  
    c. Deploy another server with the golden image captured in previous step and boot the server.
7. Install any additional software or roles if required.

NOTE: The next six steps can be automated using the “PrepareForImageStreamerOSVolumeCapture.ps1” script in “scripts” directory on the GitHub repository where Windows artifact bundles are available for download.

8. Create a FAT32 partition which will be used by the artifacts for personalization:
    FAT 32 partition can be created either from UI using Disk Management utility (8.1) or using CMD Diskpart commands (8.2).

    8.1 FAT32 partition creation from UI

        a. Open "Computer Management" > "Disk Management"
        b. Select C: partition
        c. Shrink volume
        d. Change amount of space to shrink to 100 MB
        e. Select Shrink
        f. Select new Unallocated space
        g. Select New Simple Volume
        h. Leave size
        i. Assign drive letter, (Choose S)
        j. Format as FAT32 file system type (this requires changing from the default)
        k. Give Volume label as "ISDEPLOY"
        l. Finish
        m. “ISDEPLOY (S:)” should be shown
    
    8.2 FAT32 partition creation using CMD commands  
        Use list volume command to get volume number for C: partition. Here C: partition resides in Volume 0.

    ```
    C:\Users\Administrator>diskpart 
    DISKPART>list volume 
    DISKPART >select volume 0 
    DISKPART >shrink desired=100 
    DISKPART >create partition primary size=100 
    DISKPART >format fs=fat32 quick label=ISDEPLOY 
    DISKPART >assign letter=S
    ```

9. Backup drive-letters 
    ```
    reg export HKLM\System\MountedDevices C:\driveletters.reg
    ```
10. Generalize Windows using sysprep  

    WARNING: This operation is destructive and will remove all configuration. To take backup of the system at this stage, capture an as-is golden image.

    Open Command Prompt window and run the following

    ```
    cd Windows\System32\Sysprep 
    Sysprep /generalize /oobe /quit
    ```

    This will take a few minutes to complete and will generalize the system. All settings will be lost. This does not remove any additional user accounts that are created. Any user accounts not required in the captured golden image must be manually deleted.

11. Restore drive-letters 
```
reg import C:\driveletters.reg
```
12. Set Unattend.xml location to the FAT32 partition 
```
reg add HKLM\System\Setup /v UnattendFile /t REG_SZ /d "S:\ISdeploy\Unattend.xml"
```
13. Set SetupComplete.cmd location to the FAT32 partition 
```
mkdir C:\Windows\Setup\Scripts 
echo S:\ISdeploy\SetupComplete.cmd > C:\Windows\Setup\Scripts\SetupComplete.cmd
```

14. Shutdown the server.

15. Capture a golden image using the "HPE - Windows - Capture - As-Is" build plan as described in the following section.



## Capture the Golden Image

- Determine the OS Volume that was created for the Server Profile created earlier
    ![ "Server profile"][media-bm-win-server-profile]

    **Figure.** Server profile

- Navigate to the Image Streamer Golden Images page
- Select "Create golden image" specifying the OS Volume and the "HPE - Windows - Capture - As-Is" build plan:
    ![ "Create Golden Image"][media-bm-win-create-golden-image]

    **Figure.** Create Golden Image

- Select "Create"
- Delete the Server Profile "Windows Template" used to create the golden image




## Golden Image Compatibility
The golden image created using the above method will work only when the image is deployed on server hardware of
the same model. Specifically, if the number of processors on server where the image is deployed is different from the
server where the image was captured, server boot after deployment will fail. Also, if the boot controller is moved from
one Mezzanine slot on the server to another, Windows will not boot correctly.

[media-bm-win-server-profile]:<../media/bm-win-server-profile.png> 
[media-bm-win-create-golden-image]:<../media/bm-win-create-golden-image.png> 